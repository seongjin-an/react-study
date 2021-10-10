import React from "react";
import styled from "styled-components";
import {Header, Responsive} from "../../organisms/common";
import {PostHead} from "../../organisms/post";
import palette from "../../../libs/styles/palette";

export const PostViewer = () => {
    return(
        <>
            <Header />
            <StyledPostViewerBlock>
                <PostHead/>

            </StyledPostViewerBlock>
            <StyledPostContent dangerouslySetInnerHTML={{__html: '<p>HTML <b>내용</b>입니다.</p>'}}/>
        </>
    )
}
const StyledPostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
  display: flex;
`
const StyledPostContent = styled.div`
  display:flex;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 1024px;
  margin: 0 auto;
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`