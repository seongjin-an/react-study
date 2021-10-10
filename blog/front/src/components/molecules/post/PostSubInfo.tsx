import React from "react";
import styled from "styled-components";
import palette from "../../../libs/styles/palette";

export const PostSubInfo = () => {
    return(
        <StyledPostSubInfo>
            <span>
                <b>tester</b>
            </span>
            <span>{new Date().toLocaleDateString()}</span>
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