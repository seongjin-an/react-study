import React, { Component } from 'react';
import Counter from './components/basic/ClassCounter'
class ClassApp extends Component {
  state = {
    kind: 'animal',
    tigers: 0
  }
  handleIncreaseTiger = () => {
    console.log('increase tiger')
    this.setState({
      ...this.state,
      tigers: this.state.tigers+1
    })
  }
  handleDecreaseTiger = () => {
    console.log('decrease tiger')
    this.setState({
        ...this.state,
        tigers: this.state.tigers - 1
    })
  }

  render(){
    return(
      <Counter kind={this.state.kind} tigers={this.state.tigers} 
        handleIncreaseTiger={this.handleIncreaseTiger} handleDecreaseTiger={this.handleDecreaseTiger}
      />
    )
  }
}
export default ClassApp