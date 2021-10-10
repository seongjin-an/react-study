import createRequestSaga from "../../libs/createRequestSaga";
import {READ_POST, READ_POST_REQUEST} from "./postType";
import {readPost} from "../../libs/api/posts";
import {all, fork, takeLatest} from "@redux-saga/core/effects";

const fetchReadPost = createRequestSaga(READ_POST, readPost)

const watchReadPost = function*(){
    yield takeLatest(READ_POST_REQUEST, fetchReadPost)
}

const postSaga = function*(){
    yield all([
        fork(watchReadPost)
    ])
}
export default postSaga