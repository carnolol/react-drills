import React, { Component } from 'react'
import './App.css'
import NewTask from './NewTask'
import List from './List'

class App extends Component{
  constructor(){
    super()
    this.state={
      list:[] //stored in a var called "tasks" passed to child List.js folder
    }
    //this is what allows us to pass our "handleAddTask" method to our child NewTask.js folder in the form of a variable "add" that is declaired in the <NewTask/>
    this.handleAddTask = this.handleAddTask.bind(this)
  }
  handleAddTask(task){
    this.setState({list: [...this.state.list, task]}) //need clarity here, what does this line do?
  }
  render(){
  return (
    <div className="App">
      <h1>My to-do List:</h1>
     <NewTask add={this.handleAddTask}/>
     <List tasks={this.state.list}/>
    </div>
  );
}
}

export default App;
