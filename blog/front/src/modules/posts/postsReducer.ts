import {createReducer, PayloadAction} from "@reduxjs/toolkit";
import {IPosts, LIST_POSTS_FAILURE, LIST_POSTS_SUCCESS} from "./postsType";
import {IPostsSuccess} from "./postsAction";
export interface IUser{
    username: string
    _id: string
}
export interface IPost{
    body: string
    publishedDate: string
    tags: string[]
    title: string
    user: IUser
    __v: number
    _id: string
}
interface IPostsState {
    posts: IPost[] | null
    error:null,
    lastPage: number
}
const initialState = {
    posts: null,
    error: null,
    lastPage: 1
} as IPostsState
const posts = createReducer(initialState,{
    [LIST_POSTS_SUCCESS]: (state: IPostsState, action: PayloadAction<IPostsSuccess>) => {
        return{
            ...state,
            posts: action.payload.list,
            lastPage: parseInt(action.payload.meta.headers["last-page"], 10)
        }
    },
    [LIST_POSTS_FAILURE]: (state: IPostsState, action) => {
        return{
            ...state,
            error: action.payload
        }
    }
})
export default posts