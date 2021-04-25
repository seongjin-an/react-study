import {Board, GET_BOARDS_FAIL, GET_BOARDS_SUCCESS} from "./BoardType";
import {createReducer} from "@reduxjs/toolkit";

interface BoardState{
    boards: Board[],
    error: boolean
}

const initialState: BoardState= {
    boards: [],
    error: false
}

const BoardReducer = createReducer(initialState, {
    [GET_BOARDS_SUCCESS]: (state:BoardState, action) => {
        state.boards = action.payload
    },
    [GET_BOARDS_FAIL]:(state:BoardState, action) => {
        state.error = true
    }
})