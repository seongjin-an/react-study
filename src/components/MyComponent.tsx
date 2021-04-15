import React from 'react';
import styled from "styled-components";

const ComponentMainStyle = styled.div`
    margin: 1vw;
    height: 10vw;
    width: 40vw;
`
const MyComponent = (props:{name:any}) => {
    return <ComponentMainStyle>HI.. {props.name}</ComponentMainStyle>
}
export default MyComponent