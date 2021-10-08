import React, {ChangeEvent, MouseEvent} from "react";
import styled from "styled-components";
import palette from "../../../libs/styles/palette";
interface ITagForm {
    onSubmitForm: (event: MouseEvent<HTMLButtonElement>) => void
    value: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const TagForm = ({onSubmitForm, value, onChange}:ITagForm) => {
    return(
        <StyledTagForm>
            <input placeholder="태그를 입력하세요"/>
            <button type="submit">추가</button>
        </StyledTagForm>
    )
}
const StyledTagForm = styled.form`
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  width: 256px;
  border: 1px solid ${palette.gray[9]};
  input, button{
    outline: none;
    border: none;
    font-size: 1rem;
  }
  input{
    padding: 0.5rem;
    flex: 1;
    min-width: 0;
  }
  button{
    cursor: pointer;
    padding-right: 1rem;
    padding-left: 1rem;
    border: none;
    background: ${palette.gray[8]};
    color: white;
    font-weight: bold;
    &:hover{
      background: ${palette.gray[6]};
    }
  }
`