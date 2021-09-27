import {createReducer, PayloadAction} from "@reduxjs/toolkit";
import {FINISH_LOADING, START_LOADING} from "./loadingType";
import {RootState} from "../index";

const initialState = {}

const loading = createReducer(initialState, {
    [START_LOADING]: (state:RootState, action:PayloadAction<string>) => {
        return{
            ...state,
            [action.payload]: true
        }
    },
    [FINISH_LOADING]: (state:RootState, action:PayloadAction<string>) => {
        return{
            ...state,
            [action.payload]: false
        }
    }
})
export default loading