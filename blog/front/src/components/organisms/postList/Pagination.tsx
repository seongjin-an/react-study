import React from "react";
import styled from "styled-components";
import qs, {ParsedQs} from "qs";
import {CommonButton} from "../../atoms/common";
import {RouteComponentProps, withRouter} from "react-router";
import {useSelector} from "react-redux";
import {RootState} from "../../../modules";
import {IPosts} from "../../../modules/posts/postsType";
const buildLink = ({username, tag, page}:IPosts) => {
    const query = qs.stringify({ tag, page })
    return username ? `/@${username}?${query}` : `/?${query}`
}
interface IMatchProps{
    username: string
}
interface IPaginationProps extends RouteComponentProps<IMatchProps>{
}
export const Pagination = ({ location, match }: IPaginationProps) => {
    const { lastPage, posts, loading } = useSelector((state:RootState) => ({
        lastPage: state.posts.lastPage,
        posts: state.posts.posts,
        loading: state.loading["posts/LIST_POSTS"]
    }))
    if(!posts || loading) return null
    const { username } = match.params
    const { tag, page = 1 } = qs.parse(location.search, {
        ignoreQueryPrefix: true
    })
    return(
        <StyledPaginationBlock>
            <CommonButton disabled={page === 1}
                          to={page===1 ? undefined : buildLink({username, tag, page: parseInt(String(page))  - 1} as IPosts)}>
                이전
            </CommonButton>
            <StyledPageNumber>{page}</StyledPageNumber>
            <CommonButton disabled={page===lastPage}
                          to={page===lastPage ? undefined : buildLink({username, tag, page: parseInt(String(page))+1} as IPosts)}>
                다음
            </CommonButton>
        </StyledPaginationBlock>
    )
}
export default withRouter(Pagination)
const StyledPaginationBlock = styled.div`
  width: 320px;
  margin: 0 auto 3rem;
  display: flex;
  justify-content: space-between;
`
const StyledPageNumber = styled.div``