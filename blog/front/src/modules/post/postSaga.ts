import {READ_POST_FAILURE, READ_POST_REQUEST, READ_POST_SUCCESS} from "./postType";
import {readPost} from "../../libs/api/posts";
import {all, call, fork, put, takeLatest} from "@redux-saga/core/effects";
import {PayloadAction} from "@reduxjs/toolkit";
import {finishLoading, startLoading} from "../loading/loadingAction";
import {AxiosResponse} from "axios";

const fetchReadPost = function*(action:PayloadAction<string>){
    yield put(startLoading("post/READ_POST"))
    try{
        const response:AxiosResponse = yield call(readPost, action.payload)
        console.log('createRequestSaga response:', response)
        yield put({
            type: READ_POST_SUCCESS,
            payload: response.data,
            meta: response
        })
    }catch(error){
        console.log('createRequestSaga error:', error)
        yield put({
            type: READ_POST_FAILURE,
            payload: error,
            error: true
        })
    }
    yield put(finishLoading("post/READ_POST"))
}

const watchReadPost = function*(){
    yield takeLatest(READ_POST_REQUEST, fetchReadPost)
}

const postSaga = function*(){
    yield all([
        fork(watchReadPost)
    ])
}
export default postSaga