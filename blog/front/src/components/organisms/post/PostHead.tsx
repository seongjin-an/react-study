import React, {useState} from "react";
import styled from "styled-components";
import palette from "../../../libs/styles/palette";
import {PostSubInfo, Tags} from "../../molecules/post";
import {TagList} from "../../molecules/write";

export const PostHead = () => {
    const [tags, setTags] = useState<string[]>(['hello', 'world'])
    return(
        <StyledPostHead>
            <h1>제목</h1>
            <PostSubInfo/>
            <Tags/>
        </StyledPostHead>
    )
}
const StyledPostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1{
    font-size: 3rem;
    line-height: 1.5rem;
    margin: 0;
  }
`