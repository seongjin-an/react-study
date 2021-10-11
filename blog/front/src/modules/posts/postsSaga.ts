import createRequestSaga from "../../libs/createRequestSaga";
import {LIST_POSTS, LIST_POSTS_REQUEST} from "./postsType";
import {listPosts} from "../../libs/api/posts";
import {all, fork, takeLatest} from "@redux-saga/core/effects";

const fetchListPosts = createRequestSaga(LIST_POSTS, listPosts)
const watchListPosts = function*(){
    yield takeLatest(LIST_POSTS_REQUEST, fetchListPosts)
}
const postsSaga = function*(){
    yield all([
        fork(watchListPosts)
    ])
}
export default postsSaga