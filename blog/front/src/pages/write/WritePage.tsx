import React from "react";
import {Responsive} from "../../components/organisms/common";
import {EditorTemplate} from "../../components/templates/write";
import {Helmet} from "react-helmet-async";

export const WritePage = () => {
    return <Responsive>
        <Helmet>
            <title>글 작성하기</title>
        </Helmet>
        <EditorTemplate/>
    </Responsive>
}