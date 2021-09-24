// let postId = 1
//
// const posts = [
//     {
//         id: 1,
//         title: '제목',
//         body: '내용'
//     }
// ]
// //exports. => export const 로 바꾸자
// /*  포스트 작성
//     POST /api/posts
//     { title, body }
//  */
// export const write = ctx => {
//     //REST API 의 Request Body 는 ctx.request.body 에서 조회할 수 있다.
//     const { title, body } = ctx.request.body
//     postId += 1;
//     const post = { id: postId, title, body }
//     posts.push(post)
//     ctx.body = post
// }
//
// /*  포스트 목록 조회
//     GET /api/posts
//  */
// export const list = ctx => {
//     ctx.body = posts;
// }
//
// /*  특정 포스트 조회
//     GET /api/posts/:id
//  */
// export const read = ctx => {
//     const { id } = ctx.params
//     //주어진 id 값으로 포스트를 찾는다
//     //파라미터로 받아 온 값은 문자열 형식이므로 파라미터를 숫자로 변환하거나
//     //비교할 p.id 값을 문자열로 변경해야 한다.
//     const post = posts.find(p => p.id.toString() === id)
//     if(!post){
//         ctx.status = 404
//         ctx.body = {
//             message: '포스트가 존재하지 않습니다.'
//         }
//         return
//     }
//     ctx.body = post
// }
//
// /*  특정 포스트 제거
//     DELETE /api/psots/:id
//  */
// export const remove = ctx => {
//     const { id } = ctx.params
//     //해당 id 를 가진 post 가 몇 번째인지 확인한다.
//     const index = posts.findIndex(p => p.id.toString() === id)
//     if(index === -1){
//         ctx.status = 404
//         ctx.body = {
//             message: '포스트가 존재하지 않습니다.'
//         }
//         return
//     }
//     posts.splice(index, 1)
//     ctx.status = 204;//No Content 성공 상태 응답 코드는 요청이 성공했으나 클라이언트가 현재 페이지에서 벗어나지 않아도 된다는 것을 나타냄
// }
//
// /*  포스트 수정(교체)
//     PUT /api/posts/:id
//     { title, body }
//  */
// export const replace = ctx => {
//     //PUT메서드는 전체 포스트 정보를 입력하여 데이터를 통째로 교체할 때 사용한다.
//     const { id } = ctx.params
//     const index = posts.findIndex(p => p.id.toString() === id)
//     if(index === -1){
//         ctx.status = 404
//         ctx.body = {
//             message: '포스트가 존재하지 않습니다.'
//         }
//         return
//     }
//     posts[index] = {
//         id,
//         ...ctx.request.body
//     }
//     ctx.body = posts[index]
// }
//
// /*  포스트 수정(특정 필드 변경)
//     PATCH /api/posts/:id
//     { title, body }
//  */
// export const update = ctx => {
//     const { id } = ctx.params
//     const index = posts.findIndex(p => p.id.toString() === id)
//     if(index === -1){
//         ctx.status = 404
//         ctx.body = {
//             message: '포스트가 존재하지 않습니다.'
//         }
//         return
//     }
//     posts[index] = {
//         ...posts[index],
//         ...ctx.request.body
//     }
//     ctx.body = posts[index]
// }
import Post from '../../models/posts'
import mongoose from "mongoose";
import Joi from '@hapi/joi'
const { ObjectId } = mongoose.Types
export const checkObjectId = (ctx, next) => {
    const { id } = ctx.params
    if(!ObjectId.isValid(id)){
        ctx.status = 400
        return
    }
    return next()
}
/*  포스트 작성
    POST /api/posts
    { title, body }
 */
export const write = async ctx => {
    const schema = Joi.object().keys({
        title: Joi.string().required(),//required()가 있으면 필수 항목이다.
        body: Joi.string().required(),
        tags: Joi.array().items(Joi.string()).required()
    })
    //검증 후 실패인 경우 에러 처리
    const result = schema.validate(ctx.request.body)
    if(result.error){
        ctx.status=400
        ctx.body=result.error
        return
    }
    const { title, body, tags } = ctx.request.body
    const post = new Post({ title, body, tags })
    try{
        await post.save()
        ctx.body = post
    }catch(e){
        ctx.throw(500, e)
    }
}
/*  포스트 목록 조회
    GET /api/posts
 */
export const list = async ctx => {
    //query는 문자열이기 때문에 숫자로 변환해 주어야 한다.
    //값이 주어지지 않았다면 1을 기본으로 사용
    const page = parseInt(ctx.query.page || '1', 10)
    if(page < 1){
        ctx.status = 400
        return
    }
    try{
        const posts = await Post.find()
            .sort({_id: -1})
            .limit(10)
            .skip((page-1)*10)//from
            .lean()
            .exec()
        const postCount = await Post.countDocuments().exec()
        ctx.set('Last-Page', Math.ceil(postCount / 10))
        ctx.body = posts
            .map(post => ({
                ...post,
                body: post.body.length < 200 ? post.body : `${post.body.slice(0, 200)}...`,
            }))
    }catch(e){
        ctx.throw(500, e)
    }
}
/*  특정 포스트 조회
    GET /api/posts/:id
 */
export const read = async ctx => {
    const { id } = ctx.params
    try{
        const post = await Post.findById(id).exec()
        if(!post){
            ctx.status = 404
            return
        }
        ctx.body = post
    }catch(e){
        ctx.throw(500, e)
    }
}
/*  특정 포스트 제거
    DELETE /api/psots/:id
 */
export const remove = async ctx => {
    const { id } = ctx.params
    try{
        await Post.findByIdAndRemove(id).exec()
        ctx.status = 204//no content
    }catch(e){
        ctx.throw(500, e)
    }
}
/*  포스트 수정(특정 필드 변경)
    PATCH /api/posts/:id
    { title, body }
 */
export const update = async ctx => {
    const { id } = ctx.params
    const schema = Joi.object().keys({
        title: Joi.string(),//required()가 있으면 필수 항목이다.
        body: Joi.string(),
        tags: Joi.array().items(Joi.string())
    })
    //검증 후 실패인 경우 에러 처리
    const result = schema.validate(ctx.request.body)
    if(result.error){
        ctx.status=400
        ctx.body=result.error
        return
    }
    try{
        const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
            new: true// true: 업데이트된 데이터를 반환하고, false: 업데이트됙 전 데이터를 반환
        }).exec()
        if(!post){
            ctx.status = 404
            return
        }
        ctx.body = post
    }catch(e){
        ctx.throw(500, e)
    }
}