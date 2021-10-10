import React from "react";
import styled from "styled-components";
import {Responsive} from "../common";
import palette from "../../../libs/styles/palette";
import {CommonButton} from "../../atoms/common";
import {PostItem} from "../../molecules/postList";

export const PostListArea = () => {
    return(
        <StyledPostListBLock>
            <StyledWritePostButtonWrapper>
                <CommonButton cyan to="/write">
                    새 글 작성하기
                </CommonButton>
            </StyledWritePostButtonWrapper>
            <PostItem/>
        </StyledPostListBLock>
    )
}
const StyledPostListBLock = styled(Responsive)`
  margin-top: 3rem;
`
const StyledWritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`
