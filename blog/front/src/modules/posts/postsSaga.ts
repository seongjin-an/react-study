import {IPosts, LIST_POSTS_FAILURE, LIST_POSTS_REQUEST, LIST_POSTS_SUCCESS} from "./postsType";
import {listPosts} from "../../libs/api/posts";
import {all, call, fork, put, takeLatest} from "@redux-saga/core/effects";
import {PayloadAction} from "@reduxjs/toolkit";
import {finishLoading, startLoading} from "../loading/loadingAction";
import {AxiosError, AxiosResponse} from "axios";
import {listPostsAction, listPostsFailure, listPostsSuccess} from "./postsAction";

const fetchListPosts = function*(action:PayloadAction<IPosts>){
    console.log('createRequestSaga action:', action)
    yield put(startLoading("posts/LIST_POSTS"))
    try{
        console.log('anseongjin1')
        const response:AxiosResponse = yield call(listPosts, action.payload)
        console.log('anseongjin2')
        console.log('createRequestSaga response:', response)
        // yield put({
        //     type: LIST_POSTS_SUCCESS,
        //     payload: response.data,
        //     meta: response
        // })
        yield put(listPostsSuccess({list: response.data, meta: response}))
    }catch(error){
        // console.log('createRequestSaga error:', error)
        // yield put({
        //     type: LIST_POSTS_FAILURE,
        //     payload: error,
        //     error: true
        // })
        yield put(listPostsFailure(error as AxiosResponse))
    }
    yield put(finishLoading("posts/LIST_POSTS"))
}
const watchListPosts = function*(){
    yield takeLatest(LIST_POSTS_REQUEST, fetchListPosts)
}
const postsSaga = function*(){
    yield all([
        fork(watchListPosts)
    ])
}
export default postsSaga