import React from "react";
import styled from "styled-components";
import {Responsive} from "./Responsive";
import {CommonButton} from "../../atoms/common";
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../modules";
import {logoutAction} from "../../../modules/user/userAction";

export const Header: React.FC<{

}> = () => {
    const dispatch = useDispatch()
    const { user } = useSelector((state: RootState) => ({
        user: state.user.user
    }))
    const onLogout = () => {
        dispatch(logoutAction())
    }
    return(
        <HeaderBlock>
            <Wrapper>
                <Link to="/" className="logo">
                    <span className={'post-list-header'}>REACTERS</span>
                </Link>
                {user ? (
                    <div className="right">
                        <UserInfo>{user.username}</UserInfo>
                        <CommonButton onClick={onLogout}>로그아웃</CommonButton>
                    </div>
                ):(
                    <div className="right">
                        <CommonButton to="/login">로그인</CommonButton>
                    </div>
                )}
            </Wrapper>
        </HeaderBlock>
    )
}
const HeaderBlock = styled.div`
  //position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
`
const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo{
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right{
    display: flex;
    align-items: center;
  }
`
const Spacer = styled.div`
  height: 4rem;
`
const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`