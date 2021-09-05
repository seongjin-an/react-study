import {Component} from "react";
class ClassEvent extends Component{
    state = {
        number: 0,
        text: ''
    }
    handleNumberChange = (event) => {
        this.setState({
            ...this.state,
            number: event.target.value
        })
    }
    handleTextChange = (event) => {
        this.setState({
            ...this.state,
            text: event.target.value
        })
    }
    render(){
        return(
            <div>
                <div>
                    <input type="number" defaultValue={this.state.number}
                           onChange={(event) => {
                               console.log(this.state.number)
                               this.handleNumberChange(event)
                           }}/></div>

                <div>
                    <input type="text" defaultValue={this.state.text}
                           onChange={(event)=>{
                               console.log(this.state.text)
                               this.handleTextChange(event)
                           }}/>
                </div>
            </div>
        )
    }
}
export default ClassEvent