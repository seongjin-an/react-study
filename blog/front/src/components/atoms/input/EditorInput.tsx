import React, {ChangeEvent} from "react";
import styled from "styled-components";
import palette from "../../../libs/styles/palette";
interface IEditorInputProps{
    placeholder: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    value: string
}
export const EditorInput = ({placeholder, onChange, value}:IEditorInputProps) => {
    return <StyledEditorInput placeholder={placeholder} onChange={onChange} value={value}/>
}
const StyledEditorInput = styled.input`
  font-size: 3rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]}
  margin-bottom: 2rem;
  width: 100%;
`