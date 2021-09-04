import {Component} from "react";
import './HeaderItem.css'
import {IItem} from "../../template/business/Business";
interface IHeaderItem{
    name: string
    items: IItem[]
    handleTabs: Function
}
class HeaderItem extends Component<IHeaderItem, any>{
    render(){
        const {name, items, handleTabs} = this.props
        return(
            <div className="header-item" onClick={() => handleTabs(name)}>
                {name === 'cart' ?
                    <span>&#x1F6D2; {items.filter(item=>item.quantity !== 0).length}</span> :
                    <b>{name}</b>
                }
            </div>
        )
    }
}
export default HeaderItem