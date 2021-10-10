import React from "react";
import styled from "styled-components";
import palette from "../../../libs/styles/palette";
interface ITagItemProps{
    tag: string
    onRemove: (tag: string) => void
}
export const TagItem = React.memo(({tag, onRemove}:ITagItemProps) => {
    return(
        <StyledTag onClick={()=>onRemove(tag)}>#{tag}</StyledTag>
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