import createRequestSaga from "../../libs/createRequestSaga";
import {UPDATE_POST, UPDATE_POST_REQUEST, WRITE_POST, WRITE_POST_REQUEST} from "./writeType";
import {updatePost, writePost} from "../../libs/api/posts";
import {all, fork, takeLatest} from "@redux-saga/core/effects";

const fetchWritePost = createRequestSaga(WRITE_POST, writePost)
const fetchUpdatePost = createRequestSaga(UPDATE_POST, updatePost)
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