import users, {usersSaga} from './users'
import {combineReducers} from "redux";
import {all} from "@redux-saga/core/effects";
export function* rootSaga(){
    yield all([usersSaga()])
}
const rootReducer = combineReducers({users})
export default rootReducer