import {createAction} from "@reduxjs/toolkit";
import {
    Board,
    GET_BOARDS_FAIL,
    GET_BOARDS_REQUEST,
    GET_BOARDS_SUCCESS, SET_BOARDS_FAIL,
    SET_BOARDS_REQUEST,
    SET_BOARDS_SUCCESS
} from "./BoardType";
import {AxiosResponse} from "axios";

export const getBoardsRequest = createAction(GET_BOARDS_REQUEST)
export const getBoardsSuccess = createAction<Board[]>(GET_BOARDS_SUCCESS)
export const getBoardsFail = createAction<AxiosResponse>(GET_BOARDS_FAIL)

export const setBoardsRequest = createAction<Board[]>(SET_BOARDS_REQUEST)
export const setBoardsSuccess = createAction(SET_BOARDS_SUCCESS)
export const setBoardsFail = createAction<AxiosResponse>(SET_BOARDS_FAIL)

