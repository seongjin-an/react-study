import {combineReducers, Reducer} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import {all, fork} from "@redux-saga/core/effects";
import auth from "./auth/authReducer";
import loading from './loading/loadingReducer'
import user from './user/userReducer'
import write from './write/writeReducer'
import post from "./post/postReducer";

import authSaga from "./auth/authSaga";
import userSaga from "./user/userSaga";
import writeSaga from "./write/writeSaga";
import postSaga from "./post/postSaga";

const rootReducer:Reducer = combineReducers({
    auth,
    loading,
    user,
    write,
    post
})
export const rootSaga = function*(){
    yield all([
        fork(authSaga),
        fork(userSaga),
        fork(writeSaga),
        fork(postSaga)
    ])
}
export type RootState = ReturnType<typeof rootReducer>
export const createStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = configureStore({
        reducer: rootReducer,
        middleware: [sagaMiddleware],
        devTools: process.env.NODE_ENV !== "production",
    })
    sagaMiddleware.run(rootSaga);
    return store
}

export default rootReducer