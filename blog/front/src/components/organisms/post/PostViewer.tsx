import React, {ComponentType, useEffect, useState} from "react";
import styled from "styled-components";
import palette from "../../../libs/styles/palette";
import {PostSubInfo, Tags} from "../../molecules/common";
import {Responsive} from "../common";
import {RouteComponentProps, withRouter} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../modules";
import {readPostAction, unloadPostAction} from "../../../modules/post/postAction";
import {PostActionButtons} from "../../molecules/post";
import {setOriginalPost} from "../../../modules/write/writeAction";
interface IMatchProps {
    postId: string
}
interface IPostViewerProps extends RouteComponentProps<IMatchProps>{

}
export const PostViewer = ({match, history}: IPostViewerProps) => {
    const {postId} = match.params
    const dispatch = useDispatch()
    const { post, error, loading, user } = useSelector((state:RootState) => ({
        post: state.post.post,
        error: state.post.error,
        loading: state.loading["post/READ_POST"],
        user: state.user.user
    }))
    useEffect(() => {
        dispatch(readPostAction(postId))
        return() => {
            dispatch(unloadPostAction())
        }
    }, [dispatch, postId])
    const onEdit = () => {
        dispatch(setOriginalPost(post))
        history.push('/write')
    }

    const ownPost = (user && user._id) === (post && post.user._id)
    if(error){
        if(error.response && error.response.status === 404){
            return <StyledPostViewerBlock>존재하지 않는 포스트입니다.</StyledPostViewerBlock>
        }
        console.log("error:", error)
        return <StyledPostViewerBlock>오류 발생!</StyledPostViewerBlock>
    }
    if(loading || !post){
        return null
    }
    return(
        <>
            <StyledPostViewerBlock>
                <StyledPostHead>
                    <h1>{post.title}</h1>
                    <PostSubInfo user={post.user.username} publishedDate={post.publishedDate} hasMarginTop/>
                    <Tags tags={post.tags}/>
                </StyledPostHead>
            </StyledPostViewerBlock>
            {ownPost && <PostActionButtons onEdit={onEdit}/>}
        </>
    )
}
export default withRouter<IPostViewerProps, ComponentType<IPostViewerProps>>(PostViewer)
const StyledPostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
  display: flex;
`
const StyledPostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  width: 100%;
  h1{
    font-size: 3rem;
    line-height: 1.5rem;
    margin: 0;
  }
`