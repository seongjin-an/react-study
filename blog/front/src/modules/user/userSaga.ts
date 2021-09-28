import createRequestSaga from "../../libs/createRequestSaga";
import {CHECK, CHECK_REQUEST} from "./userType";
import {check} from "../../libs/api/auth";
import {all, fork, takeLatest} from "@redux-saga/core/effects";

const fetchCheck = createRequestSaga(CHECK, check)

const watchCheck = function*(){
    yield takeLatest(CHECK_REQUEST, fetchCheck)
}

const checkSaga = function*(){
    yield all([
        fork(watchCheck)
    ])
}
export default checkSaga