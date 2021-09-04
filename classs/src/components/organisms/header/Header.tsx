import {Component} from "react";
import Header1stFloor from "../../molecules/header/Header1stFloor";
import Header2ndFloor from "../../molecules/header/Header2ndFloor";
import './Header.css'
import {IItem} from "../../template/business/Business";
export interface ITab{
    tabs: string[],
    items: IItem[]
    handleTabs: Function
}
class Header extends Component<ITab, any>{

    render(){
        const {tabs, items, handleTabs} = this.props;
        return(
            <header className="header-area">
                <Header1stFloor businessName={'STORE'} customerName={'ansj'}/>
                <Header2ndFloor tabs={tabs} items={items} handleTabs={handleTabs}/>
            </header>
        )
    }
}
export default Header