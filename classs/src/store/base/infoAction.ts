import {GET_INFO_FAIL, GET_INFO_REQUEST, GET_INFO_SUCCESS} from "./infoType";
import * as api from './infoApi'
import {IPost} from "./infoReducer";

export const getInfoRequest = (payload: boolean) => {
    return {
        type: GET_INFO_REQUEST,
        payload: payload
    }
}
export const getInfoSuccess = (payload: IPost) => {
    return {
        type: GET_INFO_SUCCESS,
        payload: payload
    }
}
export const getInfoFail = (payload:boolean) => {
    return {
        type: GET_INFO_FAIL,
        payload: payload
    }
}