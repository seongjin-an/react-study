import {createAction} from "@reduxjs/toolkit";
import {CHANGE_FIELD, INITIALIZE, SET_ORIGINAL_POST, UPDATE_POST_REQUEST, WRITE_POST_REQUEST} from "./writeType";
import {IPost} from "../posts/postsReducer";

export const initializeWrite = createAction(INITIALIZE)
export const changeWriteField = createAction<{key: string, value: string[]|string}>(CHANGE_FIELD)

export const writePost = createAction<{title: string, body: string, tags: string[]}>(WRITE_POST_REQUEST)

export const setOriginalPost = createAction<IPost>(SET_ORIGINAL_POST)

export const updatePostAction = createAction<{id: string, title: string, body: string, tags: string[]}>(UPDATE_POST_REQUEST)