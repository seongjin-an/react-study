import {createAction} from "@reduxjs/toolkit";
import {FINISH_LOADING, START_LOADING} from "./loadingType";

export const startLoading = createAction<string>(START_LOADING)
export const finishLoading = createAction<string>(FINISH_LOADING)