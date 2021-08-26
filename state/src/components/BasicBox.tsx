import Basic from "../contexts/basic";

const BasicBox = () =>{
    return(
        <Basic.Consumer>
            {value => (
                <div style={{width: '100px', height: '100px', background: value.color}}/>
            )}
        </Basic.Consumer>
    )
}
export default BasicBox