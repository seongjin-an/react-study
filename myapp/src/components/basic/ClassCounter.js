import React, {Component} from 'react';
class Counter extends Component {
    state = {
        cats: 0,
        dogs: 0
    }
    handleIncreaseCat = () => {
        this.setState({
            ...this.state,
            cats: this.state.cats + 1
        })
    }
    handleDecreaseCat = () => {
        this.setState({
            ...this.state,
            cats: this.state.cats - 1
        })
    }
    handleIncreaseDog = () => {
        this.setState({
            ...this.state,
            dogs: this.state.dogs + 1
        })
    }
    handleDecreaseDog = () => {
        this.setState({
            ...this.state,
            dogs: this.state.dogs - 1
        })
    }
    render(){
        const {kind, tigers, handleIncreaseTiger, handleDecreaseTiger} = this.props
        return(
            <div>
                <div>
                    <div>props area(states from parent component)</div>
                    <div>
                        {kind} world
                    </div>
                    <div>tigers: {tigers}</div>
                    <div>
                        <button onClick={() => handleIncreaseTiger()}>+</button>
                        <button onClick={() => handleDecreaseTiger()}>-</button>
                    </div>
                    <hr/>
                    <div>states area(states of this component)</div>
                    <div>cats: {this.state.cats}</div>
                    <div>
                        <button onClick={() => this.handleIncreaseCat()}>+</button>
                        <button onClick={() => this.handleDecreaseCat()}>-</button>
                    </div>
                    <div>dogs: {this.state.dogs}</div>
                    <div>
                        <button onClick={() => this.handleIncreaseDog()}>+</button>
                        <button onClick={() => this.handleDecreaseDog()}>-</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Counter