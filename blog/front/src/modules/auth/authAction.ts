import {createAction} from "@reduxjs/toolkit";
import {CHANGE_FIELD, INITIALIZE_FORM, LOGIN_REQUEST, REGISTER_REQUEST, SAMPLE_ACTION, TField, TForm} from "./authType";

export const sampleAction = createAction(SAMPLE_ACTION)

export const changeField = createAction<TField>(CHANGE_FIELD)
export const initializeForm = createAction<TForm>(INITIALIZE_FORM)

export const registerAction = createAction(REGISTER_REQUEST)
export const loginAction = createAction(LOGIN_REQUEST)