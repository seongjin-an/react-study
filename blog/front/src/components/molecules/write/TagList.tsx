import React from "react";
import styled from "styled-components";
import {TagItem} from "./TagItem";
interface ITagListProps{
    tags: string[]
    onRemove: (tag:string) => void
}
export const TagList = React.memo(({tags, onRemove}:ITagListProps) => {
    return(
        <TagListBlock>
            {tags.map(tag=><TagItem key={tag} tag={tag} onRemove={onRemove} />)}
        </TagListBlock>
    )
})
const TagListBlock = styled.div`
  display: flex;
  margin-top: 0.5rem;
`