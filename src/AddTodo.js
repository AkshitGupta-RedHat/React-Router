import React, { Component } from 'react'

//Since we need a state to store what the user is typing it is a class based component
class AddTodo extends Component {
state = {
    content: ''
}
handeChange = (e) => {
    this.setState({
       content: e.target.value 
    })
}
handleSubmit = (e) => {
 e.preventDefault();
  this.props.addTodo(this.state);
    this.setState({
        content: ""
    })
}

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo</label>
                    <input type="text" onChange={this.handeChange} value={this.state.content} />
                    <button name="Submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddTodo;