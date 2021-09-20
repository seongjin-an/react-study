import {createAction} from "@reduxjs/toolkit";
import {GET_POST_FAIL, GET_POST_REQUEST, GET_POST_SUCCESS} from "./PostType";

export const getPostRequest = createAction(GET_POST_REQUEST)
export const getPostSuccess = createAction(GET_POST_SUCCESS)
export const getPostFail = createAction(GET_POST_FAIL)