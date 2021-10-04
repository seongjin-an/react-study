import React, {ChangeEvent} from "react";
import styled from "styled-components";
import palette from "../../../libs/styles/palette";

export const AuthInput: React.FC<{
    type?: string
    autoComplete: string,
    name: string,
    placeholder: string,
    onChange: (event:ChangeEvent<HTMLInputElement>) => {}
}> = ({onChange, ...rest}) => {
    return <StyledInput {...rest} onChange={onChange}/>
}
AuthInput.defaultProps = {type: "text"}
export type AuthInputProps = React.ComponentProps<typeof AuthInput>
const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus{
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + &{
    margin-top: 1rem;
  }
`