import {AxiosResponse} from "axios";
import {createReducer} from "@reduxjs/toolkit";
import {READ_POST_FAILURE, READ_POST_SUCCESS, UNLOAD_POST} from "./postType";

interface IPostState{
    post: string | null
    error: AxiosResponse | null
}

const initialState = {
    post: null,
    error: null
} as IPostState

const post = createReducer(initialState, {
    [READ_POST_SUCCESS]: (state: IPostState, action) => {
        return{
            ...state,
            post: action.payload
        }
    },
    [READ_POST_FAILURE]: (state: IPostState, action) => {
        return{
            ...state,
            error: action.payload
        }
    },
    [UNLOAD_POST]: () => initialState
})
export default post