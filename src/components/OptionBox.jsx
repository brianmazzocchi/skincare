import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

class OptionBox extends React.Component {
  constructor(){
         super();
         this.state = {
              black: false
         }
    }

    changeColor(){
        this.setState({black: !this.state.black})
    }

    render(){
        let btn_class = this.state.black ? "btn-black" : "btn-white";

        return (
             <div>
                 <button className={btn_class}
                         onClick={this.changeColor.bind(this)}>
                           {this.props.option}
                  </button>
             </div>
        )
    }
}
export default OptionBox;
// ReactDOM.render(<OptionBox />, document.querySelector("#app"))

