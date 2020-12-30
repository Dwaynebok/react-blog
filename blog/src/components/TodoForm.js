import React, {useState, useEffect, useRef} from "react";

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onsubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });
        setInput('') //makes the button clickable
    };
    // this form below is the input and the button
    return (
        // added the onsubmit to stop the page from refreshing when you click on the submit button
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? (
                    <>
                        <input type='text'
                               placeholder='update your item'
                               value={input}
                               name='text'
                               className='todo-input edit'
                               onChange={handleChange}
                               ref={inputRef}
                        />
                        <button className="todo-button edit"> update</button>
                    </>
                ) :
                (
                    <>
                        <input type='text'
                               placeholder='add a todo'
                               value={input}
                               name='text'
                               className='todo-input'
                               onChange={handleChange}
                               ref={inputRef}
                        />
                        <button className="todo-button"> Add todo</button>
                    </>
                )}
            }

        </form>
    )
}

export default TodoForm

