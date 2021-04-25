export interface Board{
    bno: number,
    title: string,
    content: string
}

export const GET_BOARDS_REQUEST = 'board/GET_BOARDS_REQUEST'
export const GET_BOARDS_SUCCESS = 'board/GET_BOARDS_SUCCESS'
export const GET_BOARDS_FAIL = 'board/GET_BOARDS_FAIL'

export const SET_BOARDS_REQUEST = 'board/SET_BOARDS_REQUEST'
export const SET_BOARDS_SUCCESS = 'board/SET_BOARDS_SUCCESS'
export const SET_BOARDS_FAIL = 'board/SET_BOARDS_FAIL'