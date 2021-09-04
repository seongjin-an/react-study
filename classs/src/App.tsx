import React, {Component} from 'react';
import Business from "./components/template/business/Business";
import './App.css'
class App extends Component<any, any>{

  render(){
    return(
        <div className="app-container">
            <Business />
        </div>
    )
  }
}


export default App;
