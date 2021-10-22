import {createAction} from "@reduxjs/toolkit";
import {READ_POST_FAILURE, READ_POST_REQUEST, READ_POST_SUCCESS} from "./postTypes";

export const readPostRequest = createAction(READ_POST_REQUEST)
export const readPostSuccess = createAction(READ_POST_SUCCESS)
export const readPostFailure = createAction(READ_POST_FAILURE)