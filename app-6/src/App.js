import React, { Component } from 'react'
import './App.css'
import Todo from './components/Todo'


class App extends Component{
  constructor(){
    super()
      this.state = {
        list:[],
        user: ''
      }
      this.handleAddTodoList = this.handleAddTodoList.bind(this)
    }
  handleAddTodoList(){
    this.setState({
      list: [...this.state.list, this.state.user]
      // would love more clarity on what this does. what the spread operator does. 
    })
  }
  handleUserChange(val){
    this.setState({user: val})
  }
  render(){
    let list = this.state.list.map((e,i) => {
      return <Todo key={i} task={e}/>
    })
  return (
    <div className="App">
      <h1>My to-do list:</h1>
      <div>
        <input
          value={this.state.user}
          placeholder='Enter Todo'
          onChange={e => this.handleUserChange(e.target.value)}        
        />
        <button onClick={this.handleAddTodoList}>Add to List</button>
      </div>

     {list}

    </div>
  )
}
}
export default App
