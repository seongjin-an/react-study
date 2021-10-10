import React from "react";
import styled from "styled-components";
import palette from "../../../libs/styles/palette";
import {PostSubInfo, Tags} from "../common";

export const PostItem = () => {
    return(
        <StyledPostItemBlock>
            <h2>제목</h2>
            <PostSubInfo user="username" publishedDate={new Date().toString()} hasMarginTop={false}/>
            <Tags tags={['tag1', 'tag2', 'tag3']}/>
            <p>포스트 내용의 일부분..</p>
        </StyledPostItemBlock>
    )
}
const StyledPostItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  &:first-child{
    padding-top: 0;
  }
  & + &{
    border-top: 1px solid ${palette.gray[2]};
  }
  h2{
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover{
      color: ${palette.gray[6]};
    }
  }
  p{
    margin-top: 2rem;
  }
`