import React from "react";
import express from 'express'
import { StaticRouter } from 'react-router-dom'
import ReactDOMServer from 'react-dom/server'
import App from "./App";
import path from 'path'
import fs from 'fs'
// const html = ReactDOMServer.renderToString(
//     <div>Hello Server Side Rendering..!</div>
// )
// console.log(html)
const manifest = JSON.parse(
    fs.readFileSync(path.resolve('./build/asset-manifest.json'), 'utf8')
)
const chunks = Object.keys(manifest.files)
    .filter(key => /chunk\.js$/.exec(key))
    .map(key => `<script src="${manifest.files[key]}"></script>`)
    .join('')
function createPage(root){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no"/>
        <meta name="theme-color" content="#000000" />
        <title>React App</title>
        <link href="${manifest.files['main.css']}" rel="stylesheet"/>
    </head>
    <body>
        <noscript>You need to enable Javascript to run this app.</noscript>
        <div id="root">
            ${root}
        </div>
        <script src="${manifest.files['runtime-main.js']}"></script>
        ${chunks}
        <script src="${manifest.files['main.js']}"></script>
    </body>
    </html>
    `
}
const app = express()
//서버 사이드 렌더링을 처리할 핸들러 함수이다.
const serverRender = (req, res, next) => {
    //이 함수는 404 응답을 받아야 하는 상황에 404를 응답하지 않고 서버 사이드 렌더링을 해 준다.
    const context = {}
    const jsx = (
        <StaticRouter location={req.url} context={context}>
            <App/>
        </StaticRouter>
    )
    const root = ReactDOMServer.renderToString(jsx)//렌더링을 하고
    res.send(createPage(root))//클라이언트에게 결과물을 응답
}
const serve = express.static(path.resolve('./build'), {
    index: false
})
app.use(serve)
app.use(serverRender)
app.listen(5000, () => {
    console.log('Running on http://localhost:5000')
})