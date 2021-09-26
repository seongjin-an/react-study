import React from "react";
import {AuthTemplate} from "../../components/templates/auth";
import {AuthArea} from "../../components/organisms/auth";
import {EFormType} from "../../components/organisms/auth/AuthArea";

const RegisterPage = () => {
    return<AuthTemplate>
        <AuthArea type={EFormType.register}/>
    </AuthTemplate>
}
export { RegisterPage }