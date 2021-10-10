import React from "react";
import styled from "styled-components";
import palette from "../../../libs/styles/palette";
interface IPostSubInfoProps{
    user: string
    publishedDate: string
}
export const PostSubInfo = ({user, publishedDate}: IPostSubInfoProps) => {
    return(
        <StyledPostSubInfo>
            <span>
                <b>{user}</b>
            </span>
            <span>{new Date(publishedDate).toLocaleDateString()}</span>
        </StyledPostSubInfo>
    )
}
const StyledPostSubInfo = styled.div`
  margin-top: 1rem;
  color: ${palette.gray[6]};
  span + span:before{
    color: ${palette.gray[5]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7';
  }
`