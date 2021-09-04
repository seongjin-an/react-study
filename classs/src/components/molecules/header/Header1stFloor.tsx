import {Component} from "react";
import './Header1stFloor.css';
import HeaderName from "../../atoms/header/HeaderName";
interface IHeader1st{
    businessName:string
    customerName:string
}
class Header1stFloor extends Component<IHeader1st, any>{
    render(){
        const {businessName, customerName} = this.props;
        return(
            <div className="floor-1st">
                <HeaderName name={businessName}/>
                <HeaderName name={customerName}/>
            </div>
        )
    }
}
export default Header1stFloor