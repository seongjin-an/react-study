import React from "react";
import express from 'express'
import { StaticRouter } from 'react-router-dom'
import ReactDOMServer from 'react-dom/server'
import App from "./App";
import path from 'path'
import {applyMiddleware, createStore} from "redux";
import rootReducer, {rootSaga} from "./modules";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import PreloadContext from "./libs/PreloadContext";
import createSagaMiddleware from "@redux-saga/core";
import { END } from 'redux-saga'
import {ChunkExtractor, ChunkExtractorManager} from '@loadable/server'
const statsFile = path.resolve('./build/loadable-stats.json')
function createPage(root, tags){
    return`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no"/>
        <meta name="theme-color" content="#000000" />
        <title>React App</title>
        ${tags.styles}
        ${tags.links}
    </head>
    <body>
        <noscript>You need to enable Javascript to run this app.</noscript>
        <div id="root">
            ${root}
        </div>
        ${tags.scripts}
    </body>
    </html>
    `
}
const app = express()
//서버 사이드 렌더링을 처리할 핸들러 함수이다.
const serverRender = async (req, res, next) => {
    //이 함수는 404 응답을 받아야 하는 상황에 404를 응답하지 않고 서버 사이드 렌더링을 해 준다.
    const context = {}
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware))
    const sagaPromise = sagaMiddleware.run(rootSaga).toPromise()
    const preloadContext = {
        done: false,
        promises: []
    }
    //필요한 파일을 추출하기 위한 ChunkExtractor
    const extractor = new ChunkExtractor({statsFile})

    const jsx = (
        <ChunkExtractorManager extractor={extractor}>
            <PreloadContext.Provider value={preloadContext}>
                <Provider store={store}>
                    <StaticRouter location={req.url} context={context}>
                        <App/>
                    </StaticRouter>
                </Provider>
            </PreloadContext.Provider>
        </ChunkExtractorManager>
    )
    ReactDOMServer.renderToStaticMarkup(jsx)
    store.dispatch(END)//redux-saga의 END액션을 발생시키면 액션을 모니터링하는 사가들이 모두 종료된다.
    try{
        await sagaPromise;//기존에 진행 중이던 사가들이 모두 끝날 때까지 기다린다.
        await Promise.all(preloadContext.promises)
    }catch(e){
        return res.status(500)
    }
    preloadContext.done=true
    const root = ReactDOMServer.renderToString(jsx)
    //JSON을 문자열로 변환하고 악성 스크립트가 실행되는 것을 방지하기 위해 <를 치환 처리
    //https://redux.js.org/recipes/server-rendering#security-considerations
    const stateString = JSON.stringify(store.getState()).replace(/</g, '\\u003c')
    const stateScript = `<script>__PRELOADED_STATE__=${stateString}</script>`//리덕스 초기 상태를 스크립트로 주입

    const tags={
        scripts: stateScript + extractor.getScriptTags(),//스크립트 앞부분에 리덕스 상태 넣기
        links: extractor.getLinkTags(),
        styles: extractor.getStyleTags()
    }

    res.send(createPage(root, tags))//클라이언트에게 결과물을 응답
}
const serve = express.static(path.resolve('./build'), {
    index: false
})
app.use(serve)
app.use(serverRender)
app.listen(5000, () => {
    console.log('Running on http://localhost:5000')
})

