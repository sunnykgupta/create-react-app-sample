import React, { Component } from 'react';
import logo from './logo.svg';
import Button from "./Button";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="primekeeper-test-container">
          <div className="button-set-container">
            <Button className="App-button" color={"Red"} text={10}></Button>
            <Button className="App-button" color={"Green"} text={10}></Button>
            <Button className="App-button" color={"Blue"} text={10}></Button>
          </div>
          <div className="button-set-container">
            <Button className="App-button" color={"Red"} text={10}></Button>
            <Button className="App-button" color={"Green"} text={10}></Button>
            <Button className="App-button" color={"Blue"} text={10}></Button>
          </div>
          <div className="button-set-container">
            <Button className="App-button" color={"Red"} text={10}></Button>
            <Button className="App-button" color={"Green"} text={10}></Button>
            <Button className="App-button" color={"Blue"} text={10}></Button>
          </div>
          <div className="button-set-container">
            <Button className="App-button" color={"Red"} text={10}></Button>
            <Button className="App-button" color={"Green"} text={10}></Button>
            <Button className="App-button" color={"Blue"} text={10}></Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
