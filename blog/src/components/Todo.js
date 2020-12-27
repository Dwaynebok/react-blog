import React, {useState} from "react";
import TodoForm from "./TodoForm";
import {RiCloseCircleLine, TiEdit} from "react-icons/all";

function Todo({ todos, completeTodos }) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })


    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' :
            'todo-row'} key={index}
        >
            <div key={todo.id} onClick={() => completeTodos(todo.id)}>
                {todo.text}
            </div>
            <div className="icons" >
                <RiCloseCircleLine
                onClick={() => removeTodo(todo.id)}
                className='delete-icon'/>
                <TiEdit/>

            </div>
        </div>
    ))
}

export default Todo