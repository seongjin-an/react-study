import React from "react";
import styled from "styled-components";
import palette from "../../../libs/styles/palette";

export const AuthFooter: React.FC<{
    children: React.ReactNode
}> = ({children}) => {
    return<StyledAuthFooter>{children}</StyledAuthFooter>
}
export type AuthFooterProps = React.ComponentProps<typeof AuthFooter>
const StyledAuthFooter = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover{
      color: ${palette.gray[9]};
    }
  }
`