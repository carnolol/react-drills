import React, { Component } from 'react';
import './App.css';


class App extends Component{
  constructor(){
    super()
    this.state = {
      arr: ['red','blue','green','purple','aqua'],
      input: ''
    }
  }
  handleChange(val){
    this.setState({input: val})
  }
  filteredArr(){
    let arrToDisplay = this.state.arr
    .filter((e) => {
      return e.includes(this.state.input)
    })
    .map((e,i) => {
      return <h2 key={i}>{e}</h2>
    })
    return arrToDisplay
  }
  render(){
    return (
      <div className='App'>
        <input onChange={(e) => this.handleChange(e.target.value)}/>
        {
          this.filteredArr()
        }
      </div>
    )
  }
}

export default App