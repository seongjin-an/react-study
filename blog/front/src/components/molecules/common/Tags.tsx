import React from "react";
import styled from "styled-components";
import palette from "../../../libs/styles/palette";
import { Link } from 'react-router-dom'
interface ITagsProps{
    tags: string[]
}
export const Tags = ({tags}: ITagsProps) => {
    return<StyledTags>
        {tags.map(tag => <Link key={tag} className="tag" to={`/?tag=${tag}`}>#{tag}</Link>)}
    </StyledTags>
}
const StyledTags = styled.div`
  margin-top: 0.5rem;
  .tag{
    display: inline-block;
    color: ${palette.cyan[7]};
    text-decoration: none;
    margin-right: 0.5rem;
    &:hover{
      color: ${palette.cyan[6]};
    }
  }
`