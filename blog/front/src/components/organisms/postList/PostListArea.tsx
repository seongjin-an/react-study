import React, {ComponentType, useEffect} from "react";
import styled from "styled-components";
import {Responsive} from "../common";
import {CommonButton} from "../../atoms/common";
import {PostItem} from "../../molecules/postList";
import {RouteComponentProps, withRouter} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../modules";
import qs from "qs";
import {listPostsAction} from "../../../modules/posts/postsAction";
import {IPost} from "../../../modules/posts/postsReducer";
interface IMatchProps {
    username: string
}
interface IPostListArea extends RouteComponentProps<IMatchProps>{
    
}
export const PostListArea = ({ location, match }:IPostListArea) => {
    const dispatch = useDispatch()
    const { posts, error, loading, user } = useSelector((state:RootState) => ({
        posts: state.posts.posts,
        error: state.posts.error,
        loading: state.loading["posts/LIST_POSTS"],
        user: state.user.user
    }))
    useEffect(() => {
        const { username } = match.params
        const { tag, page } = qs.parse(location.search, {
            ignoreQueryPrefix: true
        })
        dispatch(listPostsAction({tag, username, page}))
    }, [dispatch, location.search])
    useEffect(() =>{
        if(posts){
            console.log('real posts:', posts)
        }
    }, [posts])
    if(error){
        return <StyledPostListBLock>에러가 발생했습니다!!.</StyledPostListBLock>
    }
    return(
        <StyledPostListBLock>
            <StyledWritePostButtonWrapper>
                {user && (
                    <CommonButton cyan to="/write">
                        새 글 작성하기
                    </CommonButton>
                )}
            </StyledWritePostButtonWrapper>
            {!loading && posts && posts.length>0 && (
                <div className="real-post-list">
                    {posts.map((post: IPost, index:number) => <PostItem post={post} key={index}/>)}
                </div>
            )}
        </StyledPostListBLock>
    )
}
export default withRouter<IPostListArea, ComponentType<IPostListArea>>(PostListArea)
const StyledPostListBLock = styled(Responsive)`
  margin-top: 3rem;
`
const StyledWritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`
