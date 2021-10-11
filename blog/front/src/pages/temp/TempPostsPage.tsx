import React from "react";
import {TempPostsTemplate} from "../../components/templates/temp";
import {Helmet} from "react-helmet-async";

export const TempPostsPage = () => {
    return<>
        <Helmet>
            <title>리스트</title>
        </Helmet>
        <TempPostsTemplate/>
    </>
}