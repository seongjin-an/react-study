import {Component} from "react";

class EventClassHandle extends Component{
    state={
        msg: ''
    }
    handleMsg = (event) =>{
        this.setState({
            ...this.state,
            msg: event.target.value
        })
        console.log('msg:',this.state.msg)
    }
    render(){
        return(
            <div>
                <input type="text" value={this.state.msg} onChange={this.handleMsg}/>
            </div>
        )
    }
}
export default EventClassHandle