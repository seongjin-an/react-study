import React, {ComponentType, useEffect, useState} from "react";
import styled from "styled-components";
import palette from "../../../libs/styles/palette";
import {PostSubInfo, Tags} from "../../molecules/post";
import {Responsive} from "../common";
import {RouteComponentProps, withRouter} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../modules";
import {readPostAction, unloadPostAction} from "../../../modules/post/postAction";
interface IMatchProps {
    postId: string
}
interface IPostViewerProps extends RouteComponentProps<IMatchProps>{

}
export const PostViewer = ({match}: IPostViewerProps) => {
    const {postId} = match.params
    const dispatch = useDispatch()
    const { post, error, loading } = useSelector((state:RootState) => ({
        post: state.post.post,
        error: state.post.error,
        loading: state.loading["post/READ_POST"]
    }))
    useEffect(() => {
        dispatch(readPostAction(postId))
        return() => {
            dispatch(unloadPostAction())
        }
    }, [dispatch, postId])
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
        <StyledPostViewerBlock>
            <StyledPostHead>
                <h1>{post.title}</h1>
                <PostSubInfo user={post.user.username} publishedDate={post.publishedDate}/>
                <Tags tags={post.tags}/>
            </StyledPostHead>
        </StyledPostViewerBlock>
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
  h1{
    font-size: 3rem;
    line-height: 1.5rem;
    margin: 0;
  }
`