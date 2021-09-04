import {Component} from "react";
import './Content.css'
import {ETab, IItem, IShip} from "../../template/business/Business";
import Shop from "../../molecules/shop/Shop";
import Cart from "../../molecules/cart/Cart";
import Ship from "../../molecules/ship/Ship";
interface IContent{
    tab:string
    items: IItem[]
    ship: IShip
    handleStuff: Function
    handleShip: Function
}
class Content extends Component<IContent, any>{
    render(){
        const {tab, items, ship, handleStuff, handleShip} = this.props
        return(
            <div className="content">
                <div className="contentName">
                {tab === ETab.shop ? 'shop' :
                    tab === ETab.cart ? 'cart' : 'ship'
                }
                </div>
                {tab === ETab.shop ? (<Shop items={items} handleStuff={handleStuff}/>) :
                    tab === ETab.cart ? (<Cart items={items}/>) : (<Ship ship={ship} handleShip={handleShip}/>)
                }
            </div>
        )
    }
}
export default Content