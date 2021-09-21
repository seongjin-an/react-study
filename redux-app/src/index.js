import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from "@redux-saga/core";
import post from "./store/post/PostReducer";
import {all, fork} from "@redux-saga/core/effects";
import {postSaga} from "./store/post/PostSaga";
const rootReducer = combineReducers({
    post
})
const rootSaga = function*(){
    yield all([
        fork(postSaga)
    ])
}
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
