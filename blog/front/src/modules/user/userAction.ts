import {createAction} from "@reduxjs/toolkit";
import {CHECK_REQUEST, LOGOUT, TEMP_SET_USER} from "./userType";

export const tempSetUser = createAction<string|null>(TEMP_SET_USER)
export const checkAction = createAction(CHECK_REQUEST)
export const logoutAction = createAction(LOGOUT)