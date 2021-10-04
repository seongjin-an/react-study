import createRequestSaga from "../../libs/createRequestSaga";
import {CHECK, CHECK_FAILURE, CHECK_REQUEST, LOGOUT} from "./userType";
import {check, logout} from "../../libs/api/auth";
import {all, call, fork, takeLatest} from "@redux-saga/core/effects";

const fetchCheck = createRequestSaga(CHECK, check)

const fetchCheckFailure = function*(){
    try{
        localStorage.removeItem('user')
    }catch(error){
        console.log('localStorage is not working...')
    }
}

const fetchLogout = function*(){
    try{
        yield call(logout)
        localStorage.removeItem('user')
    }catch(error){
        console.log(error)
    }
}

const watchCheck = function*(){
    yield takeLatest(CHECK_REQUEST, fetchCheck)
}
const watchCheckFailure = function*(){
    yield takeLatest(CHECK_FAILURE, fetchCheckFailure)
}
const watchLogout = function*(){
    yield takeLatest(LOGOUT, fetchLogout)
}

const checkSaga = function*(){
    yield all([
        fork(watchCheck),
        fork(watchCheckFailure),
        fork(watchLogout)
    ])
}
export default checkSaga