import {all, call, fork, put, takeLatest} from "@redux-saga/core/effects";
import axios from "axios";
import {readPostFailure, readPostSuccess} from "./postAction";
import {READ_POST_REQUEST} from "./postTypes";

const fetchReadPostRequest = function*(){
    try{
        const getList = () => axios.get('https://jsonplaceholder.typicode.com/posts')
        const response = yield call(getList)
        if(response.data){
            yield put(readPostSuccess(response.data))
        }else{
            yield put(readPostFailure())
        }
    }catch(error){
        yield put(readPostFailure())
    }
}

const watchReadPostRequest = function*(){
    yield takeLatest(READ_POST_REQUEST, fetchReadPostRequest)
}

const postSaga = function*(){
    yield all([
        fork(watchReadPostRequest)
    ])
}
export default postSaga