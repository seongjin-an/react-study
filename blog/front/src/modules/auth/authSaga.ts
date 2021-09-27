import createRequestSaga from "../../libs/createRequestSaga";
import {LOGIN, LOGIN_REQUEST, REGISTER, REGISTER_REQUEST} from "./authType";
import {login, register} from "../../libs/api/auth";
import {all, fork, takeLatest} from "@redux-saga/core/effects";

const fetchRegister = createRequestSaga(REGISTER, register)
const fetchLogin = createRequestSaga(LOGIN, login)

const watchRegister = function*(){
    yield takeLatest(REGISTER_REQUEST, fetchRegister)
}
const watchLogin = function*(){
    yield takeLatest(LOGIN_REQUEST, fetchLogin)
}

const authSaga = function*(){
    yield all([
        fork(watchRegister),
        fork(watchLogin)
    ])
}
export default authSaga