import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'
import palette from "../../../libs/styles/palette";
import {PostSubInfo, Tags} from "../common";
import {IPost} from "../../../modules/posts/postsReducer";
interface IPostItemProps{
    post: IPost
}
export const PostItem = ({post}: IPostItemProps) => {
    const { publishedDate, user, tags, title, body, _id } = post
    return(
        <StyledPostItemBlock>
            <h2>
                <Link to={`/@${user?.username}/${_id}`}>{title}</Link>
            </h2>
            <PostSubInfo user={user?.username} publishedDate={publishedDate} hasMarginTop={false}/>
            <Tags tags={tags}/>
            <p>{body}</p>
        </StyledPostItemBlock>
    )
}
const StyledPostItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  &:first-child{
    padding-top: 0;
  }
  & + &{
    border-top: 1px solid ${palette.gray[2]};
  }
  h2{
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover{
      color: ${palette.gray[6]};
    }
  }
  p{
    margin-top: 2rem;
  }
`