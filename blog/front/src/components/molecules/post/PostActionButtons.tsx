import React, {MouseEvent} from "react";
import styled from "styled-components";
import {ActionButton} from "../../atoms/common";
interface IPostActionButtonsProps{
    onEdit: (event: MouseEvent<HTMLButtonElement>) => void
}
export const PostActionButtons = ({onEdit}: IPostActionButtonsProps) => {
    return(
        <StyledPostActionButtonsBlock>
            <ActionButton onClick={onEdit}>수정</ActionButton>
            <ActionButton onClick={()=>{}}>삭제</ActionButton>
        </StyledPostActionButtonsBlock>
    )
}
const StyledPostActionButtonsBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  margin-top: -1.5rem;
  margin-right: 2rem;
`

