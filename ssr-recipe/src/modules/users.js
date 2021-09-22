import axios from 'axios'
import {call, put, takeEvery} from "@redux-saga/core/effects";

const GET_USERS_PENDING = 'users/GET_USERS_PENDING'
const GET_USERS_SUCCESS = 'users/GET_USERS_SUCCESS'
const GET_USERS_FAIL = 'users/GET_USERS_FAIL'

const GET_USER = 'users/GET_USER'
const GET_USER_SUCCESS = 'users/GET_USER_SUCCESS'
const GET_USER_FAIL = 'users/GET_USER_FAIL'

const getUsersPending = () => ({type: GET_USERS_PENDING})
const getUsersSuccess = payload => ({type: GET_USERS_SUCCESS, payload})
const getUsersFail = payload => ({type: GET_USERS_FAIL, payload, error: true})

export const getUser = payload => ({type: GET_USER, payload: payload})
export const getUserSuccess = payload => ({type: GET_USER_SUCCESS, payload: payload})
export const getUserFail = payload => ({type: GET_USER_FAIL, payload: payload, error: true})

export const getUsers = () => async dispatch => {
    try{
        dispatch(getUsersPending())
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        dispatch(getUsersSuccess(response))
    }catch(e){
        dispatch(getUsersFail(e))
        throw e
    }
}

const getUserById = id => axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
function* getUserSaga(action){
    try{
        const response = yield call(getUserById, action.payload)
        yield put(getUserSuccess(response.data))
    }catch(e){
        yield put(getUserFail(e))
    }
}
export function* usersSaga(){
    yield takeEvery(GET_USER, getUserSaga)
}
const initialState = {
    users: null,
    user: null,
    loading:{
        users: false,
        user: false
    },
    error:{
        users: null,
        user: null
    }
}

function users(state = initialState, action){
    switch(action.type){
        case GET_USERS_PENDING:
            return{
                ...state,
                loading: { ...state.loading, users:true }
            }
        case GET_USERS_SUCCESS:
            return{
                ...state,
                loading:{ ...state.loading, users:false },
                users: action.payload.data
            }
        case GET_USERS_FAIL:
            return{
                ...state,
                loading:{ ...state.loading, users:false },
                error:{ ...state.error, users: action.payload }
            }
        case GET_USER:
            return{
                ...state,
                loading:{...state.loading, user: true},
                error:{...state.error, user:null}
            }
        case GET_USER_SUCCESS:
            return{
                ...state,
                loading: {...state.loading, user: false},
                user: action.payload
            }
        case GET_USER_FAIL:
            return{
                ...state,
                loading: {...state.loading, user:false},
                error: {...state.error, user:action.payload}
            }
        default:
            return state
    }
}
export default users