import React from "react";
import styled from "styled-components";
interface IQuilWrapperProps{
    children: React.ReactNode
}
export const QuillWrapper = ({children}: IQuilWrapperProps) => {
    return(
        <StyledQuilWrapper>{children}</StyledQuilWrapper>
    )
}
const StyledQuilWrapper = styled.div`
  .ql-editor{
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before{
    left: 0;
  }
`