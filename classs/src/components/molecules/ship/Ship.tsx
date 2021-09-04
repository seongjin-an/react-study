import {ChangeEvent, Component} from "react";
import {IShip} from "../../template/business/Business";
interface IShipProps{
    ship: IShip
    handleShip: Function
}
class Ship extends Component<IShipProps, any>{

    // handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    //     console.log('event.target.name:',event.target.name)
    //     console.log('event.target.value:',event.target.value)
    //     if(event.target.name === 'name'){
    //         this.setState({
    //             ...this.state,
    //             name: event.target.value
    //         })
    //     }else if(event.target.name === 'address'){
    //         this.setState({
    //             ...this.state,
    //             address: event.target.value
    //         })
    //     }
    // }
    render(){
        const {ship, handleShip} = this.props
        return(
            <div className="ship-area">
                <div>
                    이름: <input type='text' name="name" value={ship.name}
                               onChange={(event) => handleShip(event)}/>
                </div>
                <div>
                    주소: <input type='text' name="address" value={ship.address}
                               onChange={(event) => handleShip(event)}/>
                </div>
                <div>
                    SHIPPING TO:
                </div>
                <div>
                    이름: {ship.name}
                </div>
                <div>
                    주소: {ship.address}
                </div>
            </div>
        )
    }
}
export default Ship