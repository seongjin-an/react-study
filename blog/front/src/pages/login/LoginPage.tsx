import React from "react";
import {AuthTemplate} from "../../components/templates/auth";
import {AuthArea} from "../../components/organisms/auth";
import {EFormType} from "../../components/organisms/auth/AuthArea";
interface ILoginPageProps{
    children?: React.ReactNode
}
export const LoginPage = () => {
    return <AuthTemplate>
        <AuthArea type={EFormType.login}/>
    </AuthTemplate>
}