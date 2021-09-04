import {ChangeEvent, Component, FormEvent} from "react";
import Header from "../../organisms/header/Header";
import Content from "../../organisms/content/Content";
import './Business.css'

export enum ETab{
    shop='shop', cart='cart', ship='ship'
}
export interface IItem{
    desc:string
    price: number
    quantity: number
}
export interface IShip{
    name: string
    address: string
}
export interface IState{
    tabs: ETab[]
    tab: ETab
    items: IItem[]
    ship: IShip
}
class Business extends Component<any, IState>{
    state = {
        tabs: [ETab.shop, ETab.cart, ETab.ship],
        tab: ETab.shop,
        items: [
            {desc: '모자', price: 10000, quantity: 0},
            {desc: '양말', price: 5000, quantity: 0},
            {desc: '바지', price: 50000, quantity: 0},
            {desc: '책', price: 20000, quantity: 0},
            {desc: '펜', price: 2000, quantity: 0}
        ],
        ship: {name: '', address:''}
    }
    handleTabs = (tab:ETab) => {
        console.log('tab:', tab)
        this.setState({
            ...this.state,
            tab: tab
        })
    }
    handleStuff = (event: ChangeEvent<HTMLInputElement>, stuff: IItem) => {
        this.setState({
            ...this.state,
            items: this.state.items.map(
                item => item.desc === stuff.desc ? {...item, quantity: parseInt(event.target.value)}:item
            )
        })
    }
    handleShip = (event:ChangeEvent<HTMLInputElement>) => {
        if(event.target.name === 'name'){
            this.setState({
                ...this.state,
                ship: {
                    ...this.state.ship,
                    name: event.target.value
                }
            })
        }else if(event.target.name==='address'){
            this.setState({
                ...this.state,
                ship: {
                    ...this.state.ship,
                    address: event.target.value
                }
            })
        }
    }
    render(){
        return(
            <div className="business-area">
                <Header tabs={this.state.tabs} items={this.state.items} handleTabs={this.handleTabs}/>
                <Content tab={this.state.tab} items={this.state.items} ship={this.state.ship} handleStuff={this.handleStuff} handleShip={this.handleShip}/>
            </div>
        )
    }
}
export default Business