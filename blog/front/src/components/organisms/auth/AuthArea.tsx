import React, {ChangeEvent, MouseEvent, useEffect, useState} from "react";
import styled from "styled-components";
import palette from "../../../libs/styles/palette";
import {AuthForm} from "../../molecules/auth";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../modules";
import {changeField, initializeForm, loginAction, registerAction} from "../../../modules/auth/authAction";
import {checkAction} from "../../../modules/user/userAction";
import { withRouter } from "react-router-dom";
import {check} from "../../../libs/api/auth";
export enum EFormType {
    login, register
}
export const AuthArea: React.FC<{
    type: EFormType
}> = ({type}) => {
    const dispatch = useDispatch()
    const [error, setError] = useState<string>('')
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
            dispatch(loginAction({username, password}))
        }else if (type===EFormType.register){
            const {username, password, passwordConfirm} = form
            if([username, password, passwordConfirm].includes('')){
                setError('빈 칸을 모두 입력하세요.')
                return
            }
            if(password!==passwordConfirm){
                setError('비밀번호가 일치하지 않습니다.')
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
            if(type===EFormType.login) {
                setError('로그인 실패')
                return
            }else if(type===EFormType.register){
                if(authError.response.status === 409) {
                    setError('이미 존재하는 계정명입니다.')
                    return
                }
                setError('회원가입 실패')
                return
            }
        }
        if(auth){
            if(type===EFormType.login) {
                console.log('로그인 성공')
                dispatch(checkAction())
            }else if(type===EFormType.register){
                console.log('회원가입 성공')
                console.log(auth)
                dispatch(checkAction())
            }
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
        <AuthForm type={type} onChange={handleChangeInput} onSubmit={handleSubmit} error={error}/>
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