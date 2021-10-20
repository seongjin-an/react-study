import createRequestSaga from "../../libs/createRequestSaga";
import {CHECK, CHECK_FAILURE, CHECK_REQUEST, CHECK_SUCCESS, LOGOUT} from "./userType";
import {check, logout} from "../../libs/api/auth";
import {all, call, fork, put, takeLatest} from "@redux-saga/core/effects";
import {PayloadAction} from "@reduxjs/toolkit";
import {finishLoading, startLoading} from "../loading/loadingAction";
import {AxiosResponse} from "axios";

const fetchCheck = function*(action:PayloadAction){
    console.log('createRequestSaga action:', action)
    yield put(startLoading("user/CHECK"))
    try{
        const response:AxiosResponse = yield call(check)
        console.log('createRequestSaga response:', response)
        yield put({
            type: CHECK_SUCCESS,
            payload: response.data,
            meta: response
        })
    }catch(error){
        console.log('createRequestSaga error:', error)
        yield put({
            type: CHECK_FAILURE,
            payload: error,
            error: true
        })
    }
    yield put(finishLoading("user/CHECK"))
}

const fetchCheckFailure = function*(){
    try{
        localStorage.removeItem('user')
    }catch(error){
        console.log('localStorage is not working...')
    }
}

const fetchLogout = function*(){
    try{
        yield call(logout)
        localStorage.removeItem('user')
    }catch(error){
        console.log(error)
    }
}

const watchCheck = function*(){
    yield takeLatest(CHECK_REQUEST, fetchCheck)
}
const watchCheckFailure = function*(){
    yield takeLatest(CHECK_FAILURE, fetchCheckFailure)
}
const watchLogout = function*(){
    yield takeLatest(LOGOUT, fetchLogout)
}

const checkSaga = function*(){
    yield all([
        fork(watchCheck),
        fork(watchCheckFailure),
        fork(watchLogout)
    ])
}
export default checkSaga