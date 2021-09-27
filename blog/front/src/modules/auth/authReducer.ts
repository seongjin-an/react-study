import {createReducer, PayloadAction} from "@reduxjs/toolkit";
import {
    CHANGE_FIELD,
    INITIALIZE_FORM, LOGIN_FAILURE, LOGIN_SUCCESS,
    REGISTER_FAILURE,
    REGISTER_SUCCESS,
    SAMPLE_ACTION,
    TField
} from "./authType";
import {EFormType} from "../../components/organisms/auth/AuthArea";
import {AxiosResponse} from "axios";
type TRegister = {
    username: string,
    password: string,
    passwordConfirm: string
}
type TLogin = {
    username: string
    password: string
}
type TMsg = {
    username: string
    _id: string,
    __v: string
}
type auth = {
    register: TRegister
    login: TLogin
    auth: TMsg|null
    authError: AxiosResponse | null
}

const initialState = {
    register: {
        username: '',
        password: '',
        passwordConfirm: ''
    },
    login: {
        username: '',
        password: '',
    },
    auth:null,
    authError:null
} as auth

const auth = createReducer(initialState, {
    [SAMPLE_ACTION]: (state: auth, action) => {
        return state
    },
    [CHANGE_FIELD]: (state: auth, action: PayloadAction<TField>) => {
        const formType=action.payload.form === EFormType.login ? 'login' : 'register'
        console.log('action:', action, ' / formType:', formType)
        return{
            ...state,
            [formType]:{
                ...state[formType],
                [action.payload.key]: action.payload.value
            }
        }
    },
    [INITIALIZE_FORM]: (state: auth, action: PayloadAction<{form:EFormType}>) => {
        const form = action.payload.form === EFormType.register? initialState['register'] : initialState['login']
        return{
            ...state,
            [action.payload.form]: form
        }
    },
    [REGISTER_SUCCESS]: (state:auth, action:PayloadAction<TMsg>) => {
        return{
            ...state,
            authError: null,
            auth: action.payload
        }
    },
    [REGISTER_FAILURE]: (state:auth, action:PayloadAction<AxiosResponse>) => {
        return{
            ...state,
            authError: action.payload
        }
    },
    [LOGIN_SUCCESS]: (state:auth, action: PayloadAction<TMsg>) => {
        return{
            ...state,
            authError: null,
            auth: action.payload
        }
    },
    [LOGIN_FAILURE]: (state:auth, action: PayloadAction<AxiosResponse>) => {
        return{
            ...state,
            authError: action.payload
        }
    }
})
export default auth