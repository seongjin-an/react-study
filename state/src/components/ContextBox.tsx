import ColorContext, {ColorConsumer, IContext} from "../contexts/context";
import {useContext} from "react";

const ContextBox = () => {
    const {state} = useContext<IContext>(ColorContext)

    return (
        <>
            <div style={{width: '100px', height: '100px', background: state.color}}/>
            <div style={{width: '50px', height: '50px', background: state.subcolor}}/>
        </>
    )
    //위의 return()은 useContext를 사용할 때
    //아래의 return()은 useContext를 사용하지 않을 때
    // return(
    //     <ColorConsumer>
    //         {value =>
    //             (
    //                 <>
    //                     <div style={{width: '100px', height: '100px', background: value.state.color}}/>
    //                     <div style={{width: '50px', height: '50px', background: value.state.subcolor}}/>
    //                 </>
    //             )
    //         }
    //     </ColorConsumer>
    // )
}

export default ContextBox
/*
const RenderPropsSample = ({children}) =>{
    return <div>{children(3)}</div>
}
-------------------------------------------------
<RenderPropsSample>{value=>2*value}</RenderPropsSample>
 */