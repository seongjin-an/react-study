import React, {createContext, PropsWithChildren, ReactChild, ReactChildren, useState} from "react";
interface IState{
    color: string,
    subcolor: string
}
interface IActions{
    setColor: Function,
    setSubcolor: Function
}
export interface IContext{
    state: IState,
    actions: IActions
}
// const ColorContext = createContext<IColor>({color: 'black'})

//type 적용 나중에 해보자
const ColorContext: React.Context<IContext> = createContext<IContext>({
    state: {color: '', subcolor: ''},
    actions: {
        setColor: () => {},
        setSubcolor: () => {}
    }
})
const ColorProvider = ({children}:JSX.ElementChildrenAttribute) => {
    const [color, setColor] = useState('black')
    const [subcolor, setSubcolor] = useState('red')
    const value = {
        state: {color: color, subcolor: subcolor},
        actions: {setColor: setColor, setSubcolor: setSubcolor}
    }
    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    )
}
const {Consumer:ColorConsumer} = ColorContext;
export {ColorProvider, ColorConsumer};
export default ColorContext