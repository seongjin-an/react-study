import React from "react";
import styled from "styled-components";
import palette from "../../../libs/styles/palette";

export const Tags = () => {
    return<StyledTags>
        <div className="tag">#태그1</div>
        <div className="tag">#태그2</div>
        <div className="tag">#태그3</div>
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