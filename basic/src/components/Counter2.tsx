import {Component} from "react";
interface IProps{
    counter: number
}
interface IState{
    counter: number
}
class Counter2 extends Component<IProps, IState>{
    constructor(props: IProps){
        super(props)
        this.state = {
            counter: props.counter
        }
        this.handleIncrease = this.handleIncrease.bind(this)//바인드 걸어주기 싫으면 화살표 함수 사용하면 됨
        this.handleDecrease = this.handleDecrease.bind(this)
    }
    /*
      state = {
        counter: 0
      };
      handleIncrease = () => {
        console.log('increase');
        console.log(this);
      };

      handleDecrease = () => {
        console.log('decrease');
      };
     */
    handleIncrease(){
        console.log("increase")
        this.setState({
            // counter: this.state.counter + 1
            ...this.state,
            counter: this.state.counter + 1
        })
    }
    handleDecrease(){
        console.log("decrease")
        this.setState({
            //counter: this.state.counter - 1
            ...this.state,
            counter: this.state.counter -1
        })
    }
    render(){
        const {counter} = this.props;
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
            </div>
        )
    }
}
export default Counter2