// const Router = require('koa-router')
import Router from 'koa-router'
// const posts = require('./posts')
import posts from './posts'
import auth from "./auth";

const api = new Router()

api.use('/posts', posts.routes())
api.use('/auth', auth.routes())

// module.exports = api
export default api