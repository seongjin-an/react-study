import React, {ChangeEvent, MouseEventHandler, useEffect} from "react";
import styled from "styled-components";
import palette from "../../../libs/styles/palette";
import {AuthForm} from "../../molecules/auth";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../modules";
import {changeField, initializeForm} from "../../../modules/auth/authAction";
export enum EFormType {
    login, register
}
export const AuthArea: React.FC<{
    type: EFormType
}> = ({type}) => {
    const dispatch = useDispatch()
    const {form} = useSelector(({auth}: RootState) => ({
        form: type === EFormType.login ? auth.login : auth.register
    }))
    const handleChangeInput = (event:ChangeEvent<HTMLInputElement>):any => {
        const {name, value} = event.target
        dispatch(changeField({form: type, key: name, value: value}))
    }
    useEffect(() => {
        dispatch(initializeForm({form: type}))
    },[type])
    return<StyledAuthArea>
        <h3>{type===EFormType.login? '로그인' : '회원가입'}</h3>
        <AuthForm type={type} onChange={handleChangeInput}/>
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