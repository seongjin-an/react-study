// const Router = require('koa-router')
import Router from 'koa-router'
// const posts = require('./posts')
import posts from './posts'

const api = new Router()

api.use('/posts', posts.routes())

// module.exports = api
export default api