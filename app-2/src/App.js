import React, { Component } from 'react';
import './App.css';


class App extends Component{
  constructor(){
    super()
    this.state = {
      arr: ['red','blue','green','purple','aqua'],

    }
  }
  displayTheArray(){
    let display = this.state.arr.map((e,i) => {
      return <h2 key={i}>{e}</h2>
    })
    return display
  }

  render(){
    return (
      <div className='App'>
       {
         this.displayTheArray()
       } 
      </div>
    )
  }
}

export default App
{/* { this is the code i had before looking at the solution because it didnt seem right/* <h2>{this.state.arr[0]}</h2> */}
{/* <h2>{this.state.arr[1]}</h2>
<h2>{this.state.arr[2]}</h2>
<h2>{this.state.arr[3]}</h2>
// <h2>{this.state.arr[4]}</h2> */}