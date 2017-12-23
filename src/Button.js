import React, { Component } from 'react';

class Button extends Component {
    constructor(props){
        super(props);
        this.state={number: props.text}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({number: this.state.number+1})
    }

    render() {
      return (
        <div className={this.props.className}>
        <span>A button</span>
        <button onClick={this.handleClick} style={{"border-color": (this.props.color?this.props.color:"Grey")}}>{this.props.text?this.props.color+this.state.number:"Back"}</button>
        </div>
      );
    }
  }
  
  export default Button;
  