import React from 'react'

// it is a funtional as we dont need state we pass it from the app.js
const Todos = ({todos, deleteTodo})=> {
    //if a function is wrapped in {} brackets then it is automatialy invoked so
   // so we wrap it in anonymous arrow function
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
                           )
        })
    ): ( <p> You have no todos to left </p>)
    return (
        <div className = "todos collections">
            {todoList}
        </div>

    )
}

export default Todos