import React, {useEffect, useState} from 'react';
import styled from "styled-components";

const ComponentMainStyle = styled.div`
    margin: 1vw;
    height: 10vw;
    width: 40vw;
`
const temp = [1,2,3]
const MyComponent = (props:{name:any}) => {
    const [value, setValue] = useState<number[]>([])
    const imsi: number[] = []
    const [imsi2, setImsi2] = useState<number[]>([])
    useEffect(()=>{
        temp.forEach(num=>{
            setValue(prevState => [...prevState, num])
        })
    },[])
    useEffect(()=>{
        // temp.forEach(num => {
        //     setValue([...value, num])
        // })
        // temp.forEach(i=>imsi.push(i))
        // console.log("imsi:", imsi)
        // for(let i of temp){
        //     setImsi2([...imsi2, i])
        // }
        // console.log("imsi2:", imsi2)
        for(let i=0; i<temp.length; i++){
            setImsi2((a:number[])=>[...a, temp[i]])
        }

    },[])
    return <ComponentMainStyle>
        HI.. {props.name}
        value
        {value && value.map(i=><div>{i}</div>)}
        imsi2
        {imsi2 && imsi2.map(i=><div>{i}</div>)}
    </ComponentMainStyle>
}
export default MyComponent