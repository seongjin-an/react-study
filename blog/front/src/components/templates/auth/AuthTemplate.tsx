import React from "react";
import styled from "styled-components";
import palette from "../../../libs/styles/palette";
import { Link } from 'react-router-dom'

export const AuthTemplate: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {
    return<StyledAuthTemplate>
        <StyledWhiteBox>
            <div className="logo-area">
                <Link to="/">REACTERS</Link>
            </div>
            {children}
        </StyledWhiteBox>
    </StyledAuthTemplate>
}
export type AuthTemplateProps = React.ComponentProps<typeof AuthTemplate>
const StyledAuthTemplate = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.gray[2]};
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledWhiteBox = styled.div`
  .logo-area{
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;
`