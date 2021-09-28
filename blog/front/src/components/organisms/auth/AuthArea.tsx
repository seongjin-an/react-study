import React, {ChangeEvent, MouseEvent, useEffect} from "react";
import styled from "styled-components";
import palette from "../../../libs/styles/palette";
import {AuthForm} from "../../molecules/auth";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../modules";
import {changeField, initializeForm, registerAction} from "../../../modules/auth/authAction";
import {checkAction} from "../../../modules/user/userAction";
import { withRouter } from "react-router-dom";
export enum EFormType {
    login, register
}
export const AuthArea: React.FC<{
    type: EFormType
}> = ({type}) => {
    const dispatch = useDispatch()
    const {form, auth, authError, user} = useSelector(({auth, user}: RootState) => ({
        form: type === EFormType.login ? auth.login : auth.register,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user
    }))
    const handleChangeInput = (event:ChangeEvent<HTMLInputElement>):any => {
        const {name, value} = event.target
        dispatch(changeField({form: type, key: name, value: value}))
    }
    const handleSubmit = (event:MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        if(type===EFormType.login){
            const {username, password} = form

        }else if (type===EFormType.register){
            const {username, password, passwordConfirm} = form
            console.log(`username: ${username} / password: ${password} / passwordConfirm: ${passwordConfirm}`)
            if(password!==passwordConfirm){
                return
            }
            dispatch(registerAction({username, password}))
        }
    }
    useEffect(() => {
        dispatch(initializeForm({form: type}))
    },[type])
    useEffect(() => {
        if(authError){
            console.log('오류 발생')
            console.log(authError)
            return;
        }
        if(auth){
            console.log('회원가입 성공')
            console.log(auth)
            dispatch(checkAction())
        }
    }, [auth, authError, dispatch])
    useEffect(() => {
        if(user){
            console.log('check api 성공')
            console.log('user')
            window.location.href='/'//react-router-dom withRouter() history.push('/')
        }
    }, [user])
    return<StyledAuthArea>
        <h3>{type===EFormType.login? '로그인' : '회원가입'}</h3>
        <AuthForm type={type} onChange={handleChangeInput} onSubmit={handleSubmit}/>
    </StyledAuthArea>
}

export type AuthAreaProps = React.ComponentProps<typeof AuthArea>
const StyledAuthArea = styled.div`
  h3{
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`