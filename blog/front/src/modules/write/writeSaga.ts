import createRequestSaga from "../../libs/createRequestSaga";
import {WRITE_POST, WRITE_POST_REQUEST} from "./writeType";
import {writePost} from "../../libs/api/posts";
import {all, fork, takeLatest} from "@redux-saga/core/effects";

const fetchWritePost = createRequestSaga(WRITE_POST, writePost)
const watchWritePost = function*(){
    yield takeLatest(WRITE_POST_REQUEST, fetchWritePost)
}
const writeSaga = function*(){
    yield all([
        fork(watchWritePost)
    ])
}
export default writeSaga