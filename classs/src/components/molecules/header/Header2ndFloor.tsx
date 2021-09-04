import {Component} from "react";
import HeaderItem from "../../atoms/header/HeaderItem";
import './Header2ndFloor.css'
import {ITab} from "../../organisms/header/Header";
class Header2ndFloor extends Component<ITab, any>{

    render(){
        const {tabs, items, handleTabs} = this.props
        return(
            <nav className="floor-2nd">
                {tabs.map((tab:string, index:number) => {
                    return <HeaderItem key={tab+index} name={tab} items={items} handleTabs={handleTabs} />
                })}
            </nav>
        )
    }
}
export default Header2ndFloor