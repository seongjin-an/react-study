import createRequestSaga from "../../libs/createRequestSaga";
import {
    LOGIN, LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    REGISTER,
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS
} from "./authType";
import {login, register} from "../../libs/api/auth";
import {all, call, fork, put, takeLatest} from "@redux-saga/core/effects";
import {PayloadAction} from "@reduxjs/toolkit";
import {finishLoading, startLoading} from "../loading/loadingAction";
import {AxiosResponse} from "axios";

const fetchRegister = function*(action:PayloadAction<{username:string, password:string}>){
    yield put(startLoading("post/READ_POST"))
    try{
        const response:AxiosResponse = yield call(register, action.payload)
        console.log('createRequestSaga response:', response)
        yield put({
            type: REGISTER_SUCCESS,
            payload: response.data,
            meta: response
        })
    }catch(error){
        console.log('createRequestSaga error:', error)
        yield put({
            type: REGISTER_FAILURE,
            payload: error,
            error: true
        })
    }
    yield put(finishLoading("post/READ_POST"))
}
const fetchLogin = function*(action:PayloadAction<{username:string, password:string}>){
    console.log('createRequestSaga action:', action)
    yield put(startLoading("auth/LOGIN"))
    try{
        const response:AxiosResponse = yield call(login, action.payload)
        console.log('createRequestSaga response:', response)
        yield put({
            type: LOGIN_SUCCESS,
            payload: response.data,
            meta: response
        })
    }catch(error){
        console.log('createRequestSaga error:', error)
        yield put({
            type: LOGIN_FAILURE,
            payload: error,
            error: true
        })
    }
    yield put(finishLoading("auth/LOGIN"))
}

const watchRegister = function*(){
    yield takeLatest(REGISTER_REQUEST, fetchRegister)
}
const watchLogin = function*(){
    yield takeLatest(LOGIN_REQUEST, fetchLogin)
}

const authSaga = function*(){
    yield all([
        fork(watchRegister),
        fork(watchLogin)
    ])
}
export default authSaga