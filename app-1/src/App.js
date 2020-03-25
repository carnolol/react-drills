import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor (){
    super()
    this.state = {
      typebox: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(val){
    this.setState({
      typebox: val
    })
  }
  render(){
    return (
      <div className="App">
        <input onChange={(e) => this.handleChange(e.target.value)}/>
        <p>{this.state.typebox}</p>
      </div>
    )
  }
}

export default App
