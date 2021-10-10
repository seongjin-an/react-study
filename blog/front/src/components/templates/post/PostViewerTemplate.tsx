import React from "react";
import styled from "styled-components";
import {Header} from "../../organisms/common";
import PostViewer from "../../organisms/post/PostViewer";
import palette from "../../../libs/styles/palette";

export const PostViewerTemplate = () => {
    return(
        <>
            <Header />
            <PostViewer/>
            <StyledPostContent dangerouslySetInnerHTML={{__html: '<p>HTML <b>내용</b>입니다.</p>'}}/>
        </>
    )
}
const StyledPostContent = styled.div`
  display:flex;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 1024px;
  margin: 0 auto;
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`