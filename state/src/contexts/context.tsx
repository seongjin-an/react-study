import React, {createContext, useState} from "react";
interface IState{
    color: string,
    subcolor: string
}
interface IActions{
    setColor: Function,
    setSubColor: Function
}
// const ColorContext = createContext<IColor>({color: 'black'})

//type 적용 나중에 해보자
const ColorContext: React.Context<any> = createContext({
    state: {color: '', subcolor: ''},
    actions: {
        setColor: (color:string) => {},
        setSubcolor: (subcolor:string) => {}
    }
})
const ColorProvider = ({children}:any) => {
    const [color, setColor] = useState('black')
    const [subcolor, setSubcolor] = useState('red')
    const value = {
        state: {color: color, subcolor: subcolor},
        actions: {setColor: (color: string)=>{setColor(color)}, setSubcolor: (subcolor: string)=>{setSubcolor(subcolor)}}
    }
    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    )
}
const {Consumer:ColorConsumer} = ColorContext;
export {ColorProvider, ColorConsumer};
export default ColorContext