import {put, call} from '@redux-saga/core/effects'
import {PayloadAction} from "@reduxjs/toolkit";
import {finishLoading, startLoading} from "../modules/loading/loadingAction";
import {AxiosResponse} from "axios";

export default function createRequestSaga(type: string, request:any){
    const SUCCESS = `${type}_SUCCESS`
    const FAILURE = `${type}_FAILURE`
    return function*(action:PayloadAction){
        yield put(startLoading(type))
        try{
            const response:AxiosResponse = yield call(request, action.payload)
            console.log('response:', response)
            yield put({
                type: SUCCESS,
                payload: response.data
            })
        }catch(error){
            yield put({
                type: FAILURE,
                payload: error,
                error: true
            })
        }
        yield put(finishLoading(type))
    }
}

// export const createRequestActionTypes = (type:string) => {
//     const REQUEST = `${type}_REQUEST`
//     const SUCCESS = `${type}_SUCCESS`
//     const FAILURE = `${type}_FAILURE`
//     return{
//         REQUEST,
//         SUCCESS,
//         FAILURE
//     }
// }