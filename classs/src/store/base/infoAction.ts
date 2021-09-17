import * as api from './infoApi'
import {IPost} from "./infoReducer";
import {GET_INFO_FAIL, GET_INFO_REQUEST, GET_INFO_SUCCESS} from "./infoType";


// export const getInfoRequest = (payload: boolean) => {
//     return {
//         type: GET_INFO_REQUEST,
//         payload: payload
//     }
// }
// export const getInfoSuccess = (payload: IPost) => {
//     return {
//         type: GET_INFO_SUCCESS,
//         payload: payload
//     }
// }
// export const getInfoFail = (payload:boolean) => {
//     return {
//         type: GET_INFO_FAIL,
//         payload: payload
//     }
// }
export type Actions = {
    GET_INFO_REQUEST: {
        type: typeof GET_INFO_REQUEST, // string
        payload: boolean
    },
    GET_INFO_SUCCESS: {
        type: typeof GET_INFO_SUCCESS,
        payload: IPost
    },
    GET_INFO_FAIL: {
        type: typeof GET_INFO_FAIL,
        payload:boolean
    }
}
export const infoActions = {
    getInfoRequest: (payload: boolean): Actions[typeof GET_INFO_REQUEST] => ({
        type: GET_INFO_REQUEST,
        payload,
    }),
    getInfoSuccess: (payload: IPost): Actions[typeof GET_INFO_SUCCESS] => ({
        type: GET_INFO_SUCCESS,
        payload
    }),
    getInfoFail: (payload: boolean): Actions[typeof GET_INFO_FAIL] => ({
        type: GET_INFO_FAIL,
        payload
    })
}
