import React from "react";
import styled from "styled-components";
import palette from "../../../libs/styles/palette";
interface ITagItemProps{
    tag: string
}
export const TagItem = React.memo(({tag}:ITagItemProps) => {
    return(
        <StyledTag>#{tag}</StyledTag>
    )
})
const StyledTag = styled.div`
  margin-right: 0.5rem;
  color: ${palette.gray[6]};
  cursor: pointer;
  &:hover{
    opacity: 0.5;
  }
`