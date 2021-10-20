import {createAction} from "@reduxjs/toolkit";
import {IPosts, LIST_POSTS_FAILURE, LIST_POSTS_REQUEST, LIST_POSTS_SUCCESS} from "./postsType";
import {ParsedQs} from "qs";
import {AxiosResponse} from "axios";
import {IPost} from "./postsReducer";
export interface IPostsSuccess{
    list: IPost[]
    meta: AxiosResponse
}
export const listPostsAction = createAction<IPosts>(LIST_POSTS_REQUEST)
export const listPostsSuccess = createAction<IPostsSuccess>(LIST_POSTS_SUCCESS)
export const listPostsFailure = createAction<AxiosResponse>(LIST_POSTS_FAILURE)