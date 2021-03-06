import createFakeData from "./createFakeData";

require('dotenv').config()
// const Koa = require('koa')
import Koa from 'koa'
// const Router = require('koa-router')
import Router from 'koa-router'
// const bodyParser = require('koa-bodyparser')
import bodyParser from 'koa-bodyparser'
// const mongoose = require('mongoose')
import mongoose from 'mongoose'
// const api = require('./api')
import api from './api'
import jwtMiddleware from "./libs/jwtMiddleware";

import serve from 'koa-static'
import path from 'path'
import send from 'koa-send'

//process.env 내부 값에 대한 레퍼런스 만들기
const { PORT, MONGO_URI } = process.env

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB')
        // createFakeData()
    })
    .catch(e => {
        console.error(e)
    })
const app = new Koa()
const router = new Router()

//라우터 설정
router.use('/api', api.routes())
//라우터 적용 전에 bodyParser 적용
app.use(bodyParser())
app.use(jwtMiddleware)
app.use(router.routes()).use(router.allowedMethods())

const buildDirectory = path.resolve(__dirname, '../../front/build')
app.use(serve(buildDirectory))
app.use(async ctx => {
    if(ctx.status === 404 && ctx.path.indexOf('/api') !== 0){
        await send(ctx, 'index.html', { root: buildDirectory })
    }
})

//PORT가 지정되어 있지 않으면 4000 사용
const port = PORT || 4000
app.listen(port, () => {
    console.log("listening to port %d", port)
})