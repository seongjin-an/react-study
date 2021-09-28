import {AxiosResponse} from "axios";
import {createReducer} from "@reduxjs/toolkit";
import {CHECK_FAILURE, CHECK_SUCCESS} from "./userType";

export type TLogin = {
    username: string
    password: string
}
type TId = {
    _id: string
    username: string
}
type TUser = {
    user: TId | null
    checkError: AxiosResponse | null
}
const initialState = {
    user: null,
    checkError: null
} as TUser

const user = createReducer(initialState, {
    [CHECK_SUCCESS]: (state:TUser, action) => {
        return{
            ...state,
            user: action.payload,
            checkError: null
        }
    },
    [CHECK_FAILURE]: (state:TUser, action) => {
        return{
            ...state,
            user: null,
            checkError: action.payload
        }
    }
})
export default user