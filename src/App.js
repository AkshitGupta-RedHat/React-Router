import React, { Component } from 'react'
import Todos from './todos'
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos:[
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'buy some cololate'}
    ]
  }
deleteTodo= (id) =>{
  console.log("delete invoked  " + id); 
  // parameter before arrow funtion is the parameter which we use inside 
  const todos = this.state.todos.filter( todo => {
    return todo.id !== id
  });
  this.setState({
    todos
 
  })
}
 
AddTodo = (todo) => {
  todo.id = Math.random();
  let todos = [...this.state.todos, todo];
  this.setState({
    todos
  })
}
  render() {
    return (
  <div className= "App container">
    <h1  className="center blue-text">TODOS LIST</h1>
    <Todos todos={this.state.todos} deleteTodo ={this.deleteTodo}/>
    <AddTodo addTodo={this.AddTodo}/>
 
  </div>
    );
  }

}
  

export default App;
