import React, {useState} from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
    const [todos, setTodos] = useState([])

    //the next function is going to add the list
    const AddTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos]
        setTodos(newTodos)
    };

    const completeTodos = id =>{
        let updatedTodos = todos.map(todo =>{
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos);
    }



    return(
        <div>
            <h1> whats the plan for Today</h1>
            <TodoForm onsubmit={AddTodo}/>
            <Todo todos={Todo} completeTodos={completeTodos}/>
        </div>
    )
}

export default TodoList