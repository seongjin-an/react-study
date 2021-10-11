import React from "react";
import styled from "styled-components";
import {Header} from "../../organisms/common";
import PostViewer from "../../organisms/post/PostViewer";
import {PostContent} from "../../organisms/post";

export const PostViewerTemplate = () => {
    return(
        <>
            <Header />
            <PostViewer/>
            <PostContent/>
        </>
    )
}
