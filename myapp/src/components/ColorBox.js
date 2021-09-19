import ColorContext, {ColorConsumer} from '../contexts/Color'
import {useContext} from "react";

const ColorBox = () => {
    const {state} = useContext(ColorContext)
    return<>
        <div style={{width: '100px', height: '100px', background: state.color}}/>
        <div style={{width: '100px', height: '100px', background: state.subColor}}/>
    </>
}
export default ColorBox