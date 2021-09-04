import {Component} from "react";
import './HeaderName.css'
interface IHeaderName{
    name:string
}
class HeaderName extends Component<IHeaderName, any>{
    render(){
        const {name} = this.props
        return(
            <div className="header-name">
                <b>{name}</b>
            </div>
        )
    }
}
export default HeaderName