import React, {ComponentType, MouseEvent, useEffect} from "react";
import styled from "styled-components";
import {CommonButton} from "./CommonButton";
import {RouteComponentProps, withRouter} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {updatePostAction, writePost} from "../../../modules/write/writeAction";
import {RootState} from "../../../modules";

interface IWriteActionButtonsProps extends RouteComponentProps{
}
const WriteActionButtons = ({history}: IWriteActionButtonsProps) => {
    const dispatch = useDispatch()
    const { title, body, tags, post, postError, originalPostId } = useSelector((state: RootState) => ({
        title: state.write.title,
        body: state.write.body,
        tags: state.write.tags,
        post: state.write.post,
        postError: state.write.postError,
        originalPostId: state.write.originalPostId
    }))
    const onPublish = () => {
        if(originalPostId){
            dispatch(updatePostAction({title, body, tags, id: originalPostId}))
            return
        }
        dispatch(writePost({title, body, tags}))
    }
    const onCancel = () => {
        history.goBack()
    }
    useEffect(() => {
        if(post){
            // console.log('post...:', post)
            const { _id, user } = post
            history.push(`/@${user.username}/${_id}`)
        }
        if(postError){
            console.log(postError)
        }
    }, [history, post, postError])
    return(
        <StyledWriteActionButtonsBlock>
            <StyledButton cyan onClick={onPublish}>
                포스트 {!!originalPostId ? '수정' : '등록'}
            </StyledButton>
            <StyledButton onClick={onCancel}>취소</StyledButton>
        </StyledWriteActionButtonsBlock>
    )
}
export default withRouter<IWriteActionButtonsProps, ComponentType<IWriteActionButtonsProps>>(WriteActionButtons)
const StyledWriteActionButtonsBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  button + button{
    margin-left: 0.5rem;
  }
`
const StyledButton = styled(CommonButton)`
  height: 2.125rem;
  & + &{
    margin-left: 0.5rem;
  }
`