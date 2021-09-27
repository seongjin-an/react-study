import {EFormType} from "../../components/organisms/auth/AuthArea";

export type TField = {
    form: EFormType,
    key: string,
    value: string
}
export type TForm = {
    form: EFormType
}
export const SAMPLE_ACTION = 'auth/SAMPLE_ACTION'

export const CHANGE_FIELD = 'auth/CHANGE_FIELD'
export const INITIALIZE_FORM = 'auth/INITIALIZE_FORM'

export const REGISTER = 'auth/REGISTER'
export const REGISTER_REQUEST = 'auth/REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'auth/REGISTER_FAILURE'

export const LOGIN = 'auth/LOGIN'
export const LOGIN_REQUEST = 'auth/LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'auth/LOGIN_FAILURE'
