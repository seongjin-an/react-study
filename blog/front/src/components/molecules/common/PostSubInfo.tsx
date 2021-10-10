import React from "react";
import styled, {css} from "styled-components";
import palette from "../../../libs/styles/palette";
interface IPostSubInfoProps{
    user: string
    publishedDate: string
    hasMarginTop: boolean
}
export const PostSubInfo = ({user, publishedDate, hasMarginTop}: IPostSubInfoProps) => {
    return(
        <StyledPostSubInfo hasMarginTop={hasMarginTop}>
            <span>
                <b>{user}</b>
            </span>
            <span>{new Date(publishedDate).toLocaleDateString()}</span>
        </StyledPostSubInfo>
    )
}
const StyledPostSubInfo = styled.div<{
    hasMarginTop: boolean
}>`
  ${props => props.hasMarginTop && css`
    margin-top: 1rem;
  `}
  color: ${palette.gray[6]};
  span + span:before{
    color: ${palette.gray[5]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7';
  }
`
