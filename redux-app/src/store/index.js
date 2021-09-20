import {combineReducers} from "redux";
import counter from './counter/CounterReducer'
import post from './post/PostReducer'
import createSagaMiddleware from "@redux-saga/core";
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {all, fork} from "@redux-saga/core/effects";
import {postSaga} from "./post/PostSaga";
const rootReducer = combineReducers({
    counter,
    post
})
const rootSaga = function*(){
    yield all([
        fork(postSaga)
    ])
}
export const createStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = configureStore({
        reducer: rootReducer,
        middleware: [sagaMiddleware],
        devTools: process.env.NODE_ENV !== "production",
    });
    sagaMiddleware.run(rootSaga);
    return store;
};

export default rootReducer