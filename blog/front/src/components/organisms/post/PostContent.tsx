import React from "react";
import styled from "styled-components";
import palette from "../../../libs/styles/palette";
import {useSelector} from "react-redux";
import {RootState} from "../../../modules";

export const PostContent = () => {
    const { post } = useSelector((state:RootState) => ({
        post: state.post.post
    }))
    return<StyledPostContent dangerouslySetInnerHTML={{__html: post?.body}}/>
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