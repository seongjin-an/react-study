import {createReducer} from "@reduxjs/toolkit";
import {READ_POST_FAILURE, READ_POST_SUCCESS} from "./postTypes";

const initialState = {
    list: [],
    error: false
}

const post = createReducer(initialState, {
    [READ_POST_SUCCESS]: (state, action) => {
        return{
            ...state,
            list: action.payload
        }
    },
    [READ_POST_FAILURE]: (state, action) => {
        return{
            ...state,
            error: true
        }
    }
})

export default post