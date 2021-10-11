import {createReducer, PayloadAction} from "@reduxjs/toolkit";
import {
    CHANGE_FIELD,
    INITIALIZE,
    SET_ORIGINAL_POST, UPDATE_POST_FAILURE, UPDATE_POST_SUCCESS,
    WRITE_POST_FAILURE,
    WRITE_POST_REQUEST,
    WRITE_POST_SUCCESS
} from "./writeType";
import {AxiosResponse} from "axios";
import {IPost} from "../posts/postsReducer";

export interface IWriteState{
    title: string
    body: string
    tags: string[]
    post: string | null
    postError: AxiosResponse | null
    originalPostId: string | null
}
const initialState = {
    title: '',
    body: '',
    tags: [],
    post: null,
    postError: null,
    originalPostId: null
} as IWriteState

const write = createReducer(initialState, {
    [INITIALIZE]: (state: IWriteState, payload) => {
        return initialState
    },
    [CHANGE_FIELD]: (state: IWriteState, action: PayloadAction<{key: string, value: string}>) =>{
        return{
            ...state,
            [action.payload.key]: action.payload.value
        }
    },
    [WRITE_POST_REQUEST]: (state: IWriteState) => {
        return{
            ...state,
            post: null,
            postError: null
        }
    },
    [WRITE_POST_SUCCESS]: (state: IWriteState, action) => {
        return{
            ...state,
            post: action.payload
        }
    },
    [WRITE_POST_FAILURE]: (state: IWriteState, action) => {
        return{
            ...state,
            postError: action.payload
        }
    },
    [SET_ORIGINAL_POST]: (state: IWriteState, action:PayloadAction<IPost>) => {
        return{
            ...state,
            title: action.payload.title,
            body: action.payload.body,
            tags: action.payload.tags,
            originalPostId: action.payload._id
        }
    },
    [UPDATE_POST_SUCCESS]: (state: IWriteState, action) => {
        return{
            ...state,
            post: action.payload
        }
    },
    [UPDATE_POST_FAILURE]: (state: IWriteState, action) => {
        return{
            ...state,
            postError: action.payload
        }
    }
})
// export type WriteState = ReturnType<typeof write>
export default write