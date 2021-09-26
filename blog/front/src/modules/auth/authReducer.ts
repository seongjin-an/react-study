import {createReducer, PayloadAction} from "@reduxjs/toolkit";
import {CHANGE_FIELD, INITIALIZE_FORM, SAMPLE_ACTION, TField} from "./authType";
import {EFormType} from "../../components/organisms/auth/AuthArea";
type TRegister = {
    username: string,
    password: string,
    passwordConfirm: string
}
type TLogin = {
    username: string
    password: string
}
type auth = {
    register: TRegister
    login: TLogin
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
    }
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
    }
})
export default auth