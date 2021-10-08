import React from "react";
import styled from "styled-components";
import {TagItem} from "./TagItem";
interface ITagListProps{
    tags: string[]
}
export const TagList = React.memo(({tags}:ITagListProps) => {
    return(
        <TagListBlock>
            {tags.map(tag=><TagItem key={tag} tag={tag}/>)}
        </TagListBlock>
    )
})
const TagListBlock = styled.div`
  display: flex;
  margin-top: 0.5rem;
`