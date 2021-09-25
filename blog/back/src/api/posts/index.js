// const Router = require('koa-router')
import Router from 'koa-router'
// const postsCtrl = require('./posts.ctrl')
import * as postsCtrl from './posts.ctrl'
import checkLoggedIn from "../../libs/checkLoggedIn";
const posts = new Router()

const printInfo = ctx => {
    ctx.body = {
        method: ctx.method,
        path: ctx.path,
        params: ctx.params
    }
}

posts.get('/', postsCtrl.list)
posts.post('/', checkLoggedIn, postsCtrl.write)
const post = new Router()
// posts.get('/:id', postsCtrl.checkObjectId, postsCtrl.read)
post.get('/', postsCtrl.read)
// posts.delete('/:id', postsCtrl.checkObjectId, postsCtrl.remove)
post.delete('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.remove)
// posts.put('/:id', postsCtrl.replace)//deprecated..
// posts.patch('/:id', postsCtrl.checkObjectId, postsCtrl.update)
post.patch('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.update)
posts.use('/:id', postsCtrl.getPostById, post.routes())
export default posts