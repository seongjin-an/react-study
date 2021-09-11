import ClassComponent from "./components/ClassComponent";
import StateUpdate from "./components/StateUpdate";
import ClassComponent2 from "./components/ClassComponent2";
import FunctionComponent from "./components/FunctionComponent";
import ThreeOperatorArea from "./components/ThreeOperatorArea";
import EventClassHandle from "./components/EventClassHandle";
import EventFunctionHandle from "./components/EventFunctionHandle";
import Map from "./components/Map";
import Iteration from "./components/Iteration";
import {Component} from "react";
import LifeCycleSample from "./components/LifeCycleSample";
function getRandomColor(){
  return '#'+Math.floor(Math.random() * 16777215).toString(16)
}
class App extends Component{
  state = {
    color: '#000000'
  }
  handleClick = () =>{
    this.setState({
      color: getRandomColor()
    })
  }
  render(){
    return(
        <div>
          <button onClick={this.handleClick}>랜덤 색상</button>
          <LifeCycleSample color={this.state.color}/>
        </div>
    )
  }
}
export default App