import Ctx from "../contexts/ctx";

const CtxBox = () =>{
    return(
        <Ctx.Consumer>
            {value => (
                <div style={{width: '100px', height: '100px', background: value.color}}/>
            )}
        </Ctx.Consumer>
    )
}
export default CtxBox