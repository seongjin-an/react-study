import React, {MouseEvent} from "react";
import styled from "styled-components";
import palette from "../../../libs/styles/palette";
interface IActionButtonProps{
    children: React.ReactNode
    onClick: (event: MouseEvent<HTMLButtonElement>) => void
}
export const ActionButton = ({children, onClick}: IActionButtonProps) => {
    return<StyledActionButton onClick={onClick}>{children}</StyledActionButton>
}
const StyledActionButton = styled.button`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: ${palette.gray[6]};
  font-weight: bold;
  border: none;
  outline: none;
  font-size: 0.875rem;
  cursor: pointer;
  &:hover{
    background: ${palette.gray[1]};
    color: ${palette.cyan[7]};
  }
  &+&{
    margin-left: 0.25rem;
  }
`