import {combineReducers, Reducer} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import {all, fork} from "@redux-saga/core/effects";
import auth from "./auth/authReducer";
import loading from './loading/loadingReducer'
import authSaga from "./auth/authSaga";

const rootReducer:Reducer = combineReducers({
    auth,
    loading
})
export const rootSaga = function*(){
    yield all([
        fork(authSaga)
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