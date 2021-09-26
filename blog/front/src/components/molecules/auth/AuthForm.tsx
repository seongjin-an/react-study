import React, {ChangeEvent, MouseEventHandler} from "react";
import {Input} from "../../atoms/input";
import {AuthFooter} from "./AuthFooter";
import {Link} from 'react-router-dom'
import {CommonButton} from "../../atoms/button";
import {EFormType} from "../../organisms/auth/AuthArea";
export const AuthForm: React.FC<{
    type: EFormType,
    onChange: (event:ChangeEvent<HTMLInputElement>) => {}
}> = ({type, onChange}) => {
    return<>
        <form>
            <Input autoComplete={"username"} name={"username"} placeholder={"아이디"} onChange={onChange}/>
            <Input type={"password"} autoComplete={"new-password"} name={"password"} placeholder={"비밀번호"} onChange={onChange}/>
            {type===EFormType.register&&
                <Input type={"password"} autoComplete={"new-password"} name={"passwordConfirm"} placeholder={"비밀번호 확인"} onChange={onChange}/>
            }
            <CommonButton cyan fullWidth style={{marginTop: '1rem'}} onClick={(event:MouseEvent)=> {event.preventDefault(); console.log('hi') }}>
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