import createRequestSaga from "../../libs/createRequestSaga";
import {
    UPDATE_POST, UPDATE_POST_FAILURE,
    UPDATE_POST_REQUEST, UPDATE_POST_SUCCESS,
    WRITE_POST,
    WRITE_POST_FAILURE,
    WRITE_POST_REQUEST,
    WRITE_POST_SUCCESS
} from "./writeType";
import {updatePost, writePost} from "../../libs/api/posts";
import {all, call, fork, put, takeLatest} from "@redux-saga/core/effects";
import {PayloadAction} from "@reduxjs/toolkit";
import {finishLoading, startLoading} from "../loading/loadingAction";
import {AxiosResponse} from "axios";
import {IWriteState} from "./writeReducer";

const fetchWritePost = function*(action:PayloadAction<IWriteState>){
    console.log('createRequestSaga action:', action)
    yield put(startLoading("write/WRITE_POST"))
    try{
        const response:AxiosResponse = yield call(writePost, action.payload)
        console.log('createRequestSaga response:', response)
        yield put({
            type: WRITE_POST_SUCCESS,
            payload: response.data,
            meta: response
        })
    }catch(error){
        console.log('createRequestSaga error:', error)
        yield put({
            type: WRITE_POST_FAILURE,
            payload: error,
            error: true
        })
    }
    yield put(finishLoading("write/WRITE_POST"))
}
const fetchUpdatePost = function*(action:PayloadAction<{id: string, title: string, body: string, tags: string[]}>){
    console.log('createRequestSaga action:', action)
    yield put(startLoading("write/UPDATE_POST"))
    try{
        const response:AxiosResponse = yield call(updatePost, action.payload)
        console.log('createRequestSaga response:', response)
        yield put({
            type: UPDATE_POST_SUCCESS,
            payload: response.data,
            meta: response
        })
    }catch(error){
        console.log('createRequestSaga error:', error)
        yield put({
            type: UPDATE_POST_FAILURE,
            payload: error,
            error: true
        })
    }
    yield put(finishLoading("write/UPDATE_POST"))
}
const watchWritePost = function*(){
    yield takeLatest(WRITE_POST_REQUEST, fetchWritePost)
}
const watchUpdatePost = function*(){
    yield takeLatest(UPDATE_POST_REQUEST, fetchUpdatePost)
}
const writeSaga = function*(){
    yield all([
        fork(watchWritePost),
        fork(watchUpdatePost)
    ])
}
export default writeSaga