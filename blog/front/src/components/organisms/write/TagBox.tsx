import React, {ChangeEvent, FormEvent, MouseEvent, useCallback, useEffect, useState} from "react";
import styled from "styled-components";
import palette from "../../../libs/styles/palette";
import {TagForm, TagList} from "../../molecules/write";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../modules";
import {changeWriteField} from "../../../modules/write/writeAction";

export const TagBox = () => {
    const dispatch = useDispatch()
    const tags = useSelector((state: RootState) => state.write.tags)
    const [input, setInput] = useState<string>('')
    const [localTags, setLocalTags] = useState<string[]>([])
    const onChangeTags = (nextTags: string[]) => {
        dispatch(changeWriteField({key: 'tags', value: nextTags}))
    }
    const insertTag = useCallback(tag => {
        if(!tag) return
        if(localTags.includes(tag)) return;
        const nextTags = [...localTags, tag]
        setLocalTags(nextTags)
        onChangeTags(nextTags)
    }, [localTags, onChangeTags])
    const onRemove = useCallback(tag => {
        const nextTags = localTags.filter(t => t!== tag)
        setLocalTags(nextTags)
        onChangeTags(nextTags)
    }, [localTags, onChangeTags])
    const onChange = useCallback((event:ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    },[])
    const onSubmit = useCallback((event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        insertTag(input.trim())
        setInput('')
    },[input, insertTag])
    useEffect(() => {
        setLocalTags(tags)
    },[tags])
    return(
        <StyledTagBoxBlock>
            <h4>태그</h4>
            <TagForm onSubmitForm={onSubmit} value={input} onChange={onChange}/>
            <TagList tags={localTags} onRemove={onRemove}/>
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