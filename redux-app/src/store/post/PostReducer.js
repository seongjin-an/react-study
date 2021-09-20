import {createReducer} from "@reduxjs/toolkit";
import {GET_POST_FAIL, GET_POST_REQUEST, GET_POST_SUCCESS} from "./PostType";

const initialState = {
    boards:{
        list: [],
        loading: false,
        error: false
    }
}

const postReducer = createReducer(initialState, {
    [GET_POST_REQUEST]: (state, action) => {
        console.log('get post request reducer:', action)
        return{
            ...state,
            boards: {
                ...state.boards,
                loading: true
            }
        }
    },
    [GET_POST_SUCCESS]: (state, action) => {
        return{
            ...state,
            boards:{
                ...state.boards,
                loading:false,
                list: [action.payload, ...state.boards.list]
            }
        }
    },
    [GET_POST_FAIL]: (state, action) => {
        return{
            ...state,
            boards:{
                ...state.boards,
                loading:false,
                error:true
            }
        }
    }
})
export default postReducer