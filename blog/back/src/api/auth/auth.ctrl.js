import Joi from '@hapi/joi'
import User from '../../models/user'

/*
    POST /api/auth/register
    {
        username: 'ansj',
        password: '1234'
    }
 */
export const register = async ctx => {
    const schema = Joi.object().keys({
        username: Joi.string().alphanum().min(3).max(20).required(),
        password: Joi.string().required()
    })
    const result = schema.validate(ctx.request.body)
    if(result.error){
        ctx.status = 400
        ctx.body = result.error
        return
    }
    const { username, password } = ctx.request.body
    try{
        const exists = await User.findByUsername(username)
        if(exists){
            ctx.status = 409//conflict
            return
        }
        const user = new User({
            username
        })
        await user.setPassword(password)//비밀번호 설정
        await user.save()//save user into db

        // const data = user.toJSON()
        // delete data.hashedPassword
        ctx.body = user.serialize()
        const token = user.generateToken()
        ctx.cookies.set('access-token', token, {
            maxAge: 1000 * 60 * 60 * 24 * 7,
            httpOnly: true
        })
    }catch(e) {
        ctx.throw(500, e)
    }
}
/*
    POST /api/auth/login
    {
        username: 'ansj',
        password: '1234',
    }
 */
export const login = async ctx => {
    const { username, password } = ctx.request.body
    if(!username || !password){
        ctx.status = 401//unauthorized
        return
    }
    try{
        const user = await User.findByUsername(username)
        if(!user){
            ctx.status = 401
            return
        }
        const valid = await user.checkPassword(password)
        if(!valid){
            ctx.status - 401
            return
        }
        ctx.body = user.serialize()
        const token = user.generateToken()
        ctx.cookies.set('access-token', token, {
            maxAge: 1000 * 60 * 60 * 24 * 7,
            httpOnly: true
        })
    }catch(e){
        ctx.throw(500, e)
    }
}
/*
    GET /api/auth/check
 */
export const check = async ctx => {
    const { user } = ctx.state
    if(!user){
        ctx.status = 401//unauthorized
        return
    }
    ctx.body = user
}
/*
    POST /api/auth/logout
 */
export const logout = async ctx => {
    ctx.cookies.set('access-token')
    ctx.status = 204
}