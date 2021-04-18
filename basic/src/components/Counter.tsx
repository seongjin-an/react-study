import React, {Component} from 'react';
interface CounterProps{
    num : number
}
class Counter extends Component<CounterProps>{

    state = {
        num: 0
    }

    render(){
        const {num} = this.state;
        return(
            <div>
                <h1>{num}</h1>
                <button onClick={() => {
                    console.log("...")
                    this.setState({num: num+1})
                }}>+1</button>
                <button onClick={() => {
                    this.setState({num: num-1})
                }}>-1</button>
            </div>
        )
    }
}

export default Counter