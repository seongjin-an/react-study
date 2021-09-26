import {EFormType} from "../../components/organisms/auth/AuthArea";

export type TField = {
    form: EFormType,
    key: string,
    value: string
}
export type TForm = {
    form: EFormType
}
export const SAMPLE_ACTION = 'auth/SAMPLE_ACTION' as const

export const CHANGE_FIELD = 'auth/CHANGE_FIELD' as const
export const INITIALIZE_FORM = 'auth/INITIALIZE_FORM' as const