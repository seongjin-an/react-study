import React from "react";
import {ButtonProps} from "../button";
import styled, {css} from "styled-components";
import palette from "../../../libs/styles/palette";
import {Link} from "react-router-dom";
type TCommonButton = {
    fullWidth?: boolean
    cyan?: boolean
    to?: string
}
export const CommonButton: React.FC<ButtonProps & TCommonButton> =
    ({style, children, onClick, to, ...rest}) => {
    return to ? (
            <StyledLink to={to}>
                {children}
            </StyledLink>
        )
        :
        (
            <StyledButton style={style} onClick={onClick} {...rest}>
                {children}
            </StyledButton>
        )
}
export type CommonButtonProps = React.ComponentProps<typeof CommonButton>
const buttonStyle = css<CommonButtonProps>`
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
  ${props => ({...props.style})}


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
const StyledButton = styled.button<CommonButtonProps>`
    ${buttonStyle}
`
const StyledLink = styled(Link)`
    ${buttonStyle}
`