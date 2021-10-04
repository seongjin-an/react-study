import React, {ChangeEvent, MouseEvent} from "react";
import {AuthInput} from "../../atoms/input";
import {AuthFooter} from "./AuthFooter";
import {Link} from 'react-router-dom'
import {EFormType} from "../../organisms/auth/AuthArea";
import styled from "styled-components";
import {CommonButton} from "../../atoms/common";
interface IAuthFormProps{
    type: EFormType,
    onChange: (event:ChangeEvent<HTMLInputElement>) => {}
    onSubmit: (event:MouseEvent<HTMLButtonElement>) => void
    error: string
}
export const AuthForm = ({type, onChange, onSubmit, error}: IAuthFormProps) => {
    return<>
        <form>
            <AuthInput autoComplete={"username"} name={"username"} placeholder={"아이디"} onChange={onChange}/>
            <AuthInput type={"password"} autoComplete={"new-password"} name={"password"} placeholder={"비밀번호"} onChange={onChange}/>
            {type===EFormType.register&&
                <AuthInput type={"password"} autoComplete={"new-password"} name={"passwordConfirm"} placeholder={"비밀번호 확인"} onChange={onChange}/>
            }
            {error && <ErrorMessage data-testid={'ansj'}>{error}</ErrorMessage>}
            <CommonButton cyan fullWidth style={{marginTop: '1rem'}} onClick={onSubmit}>
                {type===EFormType.login? '로그인' : '회원가입'}
            </CommonButton>
        </form>
        <AuthFooter>
            {type===EFormType.login?
                <Link to="/register">회원가입</Link> :
                <Link to="/login">로그인</Link>
            }
        </AuthFooter>
    </>
}
export type AuthFormProps = React.ComponentProps<typeof AuthForm>

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`