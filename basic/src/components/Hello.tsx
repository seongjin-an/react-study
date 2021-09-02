import {Component} from "react";

class Hello extends Component<any, any>{
    static defaultProps = {
        name: "empty"
    };
    render(){
        const {color, name, isSpecial} = this.props
        return(
            <div style={{color}}>
                {isSpecial && <b>*</b>}
                HI {name}
            </div>
        )
    }
}

export default Hello