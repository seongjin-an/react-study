import {getPost} from "./PostApi";
import {all, call, fork, put, takeLatest} from "@redux-saga/core/effects";
import {getPostFail, getPostSuccess} from "./PostAction";
import {GET_POST_REQUEST} from "./PostType";

export const fetchGetPostRequest = function*(action){
    console.log('fetch request action:', action)
    try{
        const response = yield call(getPost, action.payload)
        console.log('data:', response.data)
        if(response.data){
            yield put(getPostSuccess(response.data))
        }else{
            yield put(getPostFail())
        }
    }catch(e){
        yield put(getPostFail())
    }
}
export const watchGetPostRequest = function*(){
    yield takeLatest(GET_POST_REQUEST, fetchGetPostRequest)
}
export const postSaga = function*(){
    yield all([
        fork(watchGetPostRequest)
    ])
}