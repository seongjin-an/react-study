import React from "react";
import {ButtonProps} from "./Button";
import styled, {css} from "styled-components";
import palette from "../../../libs/styles/palette";

export const CommonButton: React.FC<ButtonProps> = ({style, children}) => {
    return<StyledButton styling={style!} onClick={()=>console.log('style:', style)}>
        {children}
    </StyledButton>
}

const StyledButton = styled.button<{
    styling: React.CSSProperties
}>`
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  
  background: ${palette.gray[8]};
  &:hover{
    background: ${palette.gray[6]};
  }
  //css(styling)
  ${props => ({...props.styling})}
`