import React, {MouseEvent, useState} from "react";
import styled from "styled-components";
import {ActionButton} from "../../atoms/common";
import {AskRemoveModal} from "../../organisms/post";
interface IPostActionButtonsProps{
    onEdit: (event: MouseEvent<HTMLButtonElement>) => void
    onRemove: () => void
}
export const PostActionButtons = ({onEdit, onRemove}: IPostActionButtonsProps) => {
    const [modal, setModal] = useState<boolean>(false)
    const onRemoveClick = () => {
        setModal(true)
    }
    const onCancel = () => {
        setModal(false)
    }
    const onConfirm = () => {
        setModal(false)
        onRemove()
    }
    return(
        <>
            <StyledPostActionButtonsBlock>
                <ActionButton onClick={onEdit}>수정</ActionButton>
                <ActionButton onClick={onRemoveClick}>삭제</ActionButton>
            </StyledPostActionButtonsBlock>
            <AskRemoveModal visible={modal} onCancel={onCancel} onConfirm={onConfirm} />
        </>
    )
}
const StyledPostActionButtonsBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  margin-top: -1.5rem;
  margin-right: 2rem;
`

