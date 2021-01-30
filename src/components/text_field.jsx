import React, { useState } from 'react'

function TextField({ addToList, todoList, setTodoList}) {
    const [todo, setTodo] = useState('');
    const handleChange = e => { setTodo(e.target.value) };

    const handleSubmit = e => {
        if(todo !== "") {
            addToList({todo, todoList, setTodoList});
            setTodo("");
        } else {
            alert("Todo can't be blank!");
        }
    }

    return (
        <div>
            <input 
                name="title"
                type="text" 
                placeholder="get milk" 
                onChange={handleChange} 
                value={todo}
            />
            <button onClick={handleSubmit}>+ Add Todo</button>
        </div>
    )}

export default TextField;
