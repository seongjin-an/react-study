import {ChangeEvent, Component} from "react";
import {IItem} from "../../template/business/Business";
interface IShop{
    items: IItem[]
    handleStuff: Function
}
export const moneyForm = (number:number) =>
    number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
class Shop extends Component<IShop, any>{

    render(){
        const {items, handleStuff} = this.props
        return(
            <div className="shop-main">
                <table>
                    <tr>
                        <td>상품</td>
                        <td>가격</td>
                        <td>수량</td>
                    </tr>
                    {items.map(item => {
                        return <tr>
                                <td>{item.desc}</td>
                                <td>{moneyForm(item.price)}원</td>
                                <td>
                                    <input type="number" min={0} max={100} value={item.quantity}
                                           onChange={(event:ChangeEvent<HTMLInputElement>) => handleStuff(event, item)}/>
                                </td>
                            </tr>
                    })}
                </table>
            </div>
        )
    }
}
export default Shop