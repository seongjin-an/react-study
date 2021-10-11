import React from "react";
import {Header} from "../../organisms/common";
import PostListArea from "../../organisms/postList/PostListArea";
import Pagination from "../../organisms/postList/Pagination";

export const PostListTemplate = () => {
    return(
        <>
            <Header />
            <PostListArea/>
            <Pagination />
        </>
    )
}