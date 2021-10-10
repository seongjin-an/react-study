import {createAction} from "@reduxjs/toolkit";
import {CHANGE_FIELD, INITIALIZE, WRITE_POST_REQUEST} from "./writeType";

export const initializeWrite = createAction(INITIALIZE)
export const changeWriteField = createAction<{key: string, value: string[]|string}>(CHANGE_FIELD)

export const writePost = createAction<{title: string, body: string, tags: string[]}>(WRITE_POST_REQUEST)
