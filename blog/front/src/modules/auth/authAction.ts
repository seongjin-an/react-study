import {createAction} from "@reduxjs/toolkit";
import {CHANGE_FIELD, INITIALIZE_FORM, SAMPLE_ACTION, TField, TForm} from "./authType";
import {EFormType} from "../../components/organisms/auth/AuthArea";

export const sampleAction = createAction(SAMPLE_ACTION)

export const changeField = createAction<TField>(CHANGE_FIELD)
export const initializeForm = createAction<TForm>(INITIALIZE_FORM)
    /*
    type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;
     */