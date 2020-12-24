import React, {useState} from "react";
import TodoForm from "./TodoForm";

function TodoList() {
    const [todos, setTodos] = useState([])

    //the next function is going to add the list
    const AddTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos]
        setTodos(newTodos)
        console.log(...todos);
    }

    return(
        <div>
            <h1> whats the plan for Today</h1>
            <TodoForm onsubmit={AddTodo}/>
        </div>
    )
}

export default TodoList