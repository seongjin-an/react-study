import {createAction} from "@reduxjs/toolkit";
import {READ_POST_REQUEST, UNLOAD_POST} from "./postType";

export const readPostAction = createAction<string>(READ_POST_REQUEST)
export const unloadPostAction = createAction(UNLOAD_POST)