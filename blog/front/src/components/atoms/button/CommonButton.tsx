import React from "react";
import {ButtonProps} from "./Button";
import styled, {css} from "styled-components";
import palette from "../../../libs/styles/palette";
type Imsi = {
    fullWidth?: boolean
    cyan?: boolean
}
export const CommonButton: React.FC<ButtonProps & Imsi> =
    ({style, children, onClick, ...rest}) => {
    return<StyledButton styling={style} {...rest} onClick={onClick}>
        {children}
    </StyledButton>
}
export type CommonButtonProps = React.ComponentProps<typeof CommonButton>
type StyledCommonButtonProps = Omit<CommonButtonProps, "onClick">
const StyledButton = styled.button<{
    styling?: React.CSSProperties,
    fullWidth?: boolean,
    cyan?: boolean,
    onClick?: any
}>`
  border: none;
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
  ${({fullWidth}) => fullWidth && css`
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    width: 100%;
    font-size: 1.125rem;
  `}
  ${({cyan}) => cyan && css`
    background: ${palette.cyan[5]};
    &:hover{
      background: ${palette.cyan[4]};
    }
  `}
`