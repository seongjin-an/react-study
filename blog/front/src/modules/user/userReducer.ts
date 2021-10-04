import {AxiosResponse} from "axios";
import {createReducer} from "@reduxjs/toolkit";
import {CHECK_FAILURE, CHECK_SUCCESS, LOGOUT, TEMP_SET_USER} from "./userType";

export type TLogin = {
    username: string
    password: string
}
export type TId = {
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
    [TEMP_SET_USER]: (state: TUser, action) => {
        return{
            ...state,
            user: action.payload
        }
    },
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
    },
    [LOGOUT]: (state:TUser, action) => {
        return{
            ...state,
            user: null
        }
    }
})
export default user