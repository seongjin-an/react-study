import {Component} from "react";
import {IItem} from "../../template/business/Business";
import {moneyForm} from "../shop/Shop";
interface ICart{
    items: IItem[]
}
class Cart extends Component<ICart, any>{
    render(){
        const {items} = this.props
        return(
            <div>
                {items.filter(item => item.quantity!==0).length === 0 ? (<div>선택한 상품이 없습니다.</div>) :
                    <table>
                        <tr>
                            <td>상품</td>
                            <td>수량</td>
                            <td>가격</td>
                        </tr>
                        {items.filter(item => item.quantity !== 0).map((item, index) => {
                            return <tr key={index}>
                                <td>{item.desc}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                            </tr>
                        })}
                        <tr>
                            <td>총 가격</td>
                            <td></td>
                            <td>{moneyForm(items.filter(item=>item.quantity!==0).reduce((acc:number, item) => {
                                return acc + item.quantity*item.price
                            }, 0))}</td>
                        </tr>
                    </table>
                }
            </div>
        )
    }
}
export default Cart