import {Component} from "react";

class ClassComponent2 extends Component{
    // constructor(props) {
    //     super(props)
        state = {
            aNum: 0,
            bNum: 1
        }
    // }
    handleIncrease(){
        this.setState({
            ...this.state,
            counter: this.state.aNum + 1
        })
    }
    handleDecrease(){
        this.setState({
            ...this.state,
            counter: this.state.aNum -1
        })
    }
    render(){
        const {aNum, bNum} = this.state
        return(
            <>
                <div><h1>{aNum}</h1><h1>{bNum}</h1></div>
                <div>
                    <button onClick={this.handleIncrease}>+1</button>
                    <button onClick={this.handleDecrease}>-1</button>
                </div>
            </>
        )
    }
}
export default ClassComponent2