import React, {ChangeEvent, MouseEvent, useCallback, useState} from "react";
import styled from "styled-components";
import palette from "../../../libs/styles/palette";
import {TagForm, TagList} from "../../molecules/write";

export const TagBox = () => {
    const [input, setInput] = useState<string>('')
    const [localTags, setLocalTags] = useState<string[]>([])
    const insertTag = useCallback(tag => {
        if(!tag) return
        if(localTags.includes(tag)) return;
        setLocalTags(prevState => [...prevState, tag])
    }, [])
    const onRemove = useCallback(tag => {
        setLocalTags(prevState => prevState.filter(t => t !== tag))
    }, [])
    const onChange = useCallback((event:ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    },[])
    const onSubmit = useCallback((event:MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        insertTag(input.trim())
        setInput('')
    },[input, insertTag])
    return(
        <StyledTagBoxBlock>
            <h4>태그</h4>
            <TagForm onSubmitForm={onSubmit} value={input} onChange={onChange}/>
            <TagList tags={['태그1','태그2','태그3']}/>
        </StyledTagBoxBlock>
    )
}
const StyledTagBoxBlock = styled.div`
  width: 100%;
  border-top: 1px solid ${palette.gray[2]};
  padding-top: 2rem;
  h4{
    color: ${palette.gray[8]};
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`