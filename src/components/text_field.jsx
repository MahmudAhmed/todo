import React, { useState } from 'react'

function TextField({ addToList, todoList, setTodoList}) {
    const [todo, setTodo] = useState('');
    const handleChange = e => { setTodo(e.target.value) };

    const handleSubmit = e => {
        e.preventDefault();
        if(todo.length > 0 && todo.length <= 50) {
            addToList({todo, todoList, setTodoList});
            setTodo("");
        } else {
            alert("Todo has to be between 1 to 50 characters long!");
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    }

    return (
        <div className="text-field-container">
            <input 
                name="title"
                type="text" 
                placeholder="i.e. get milk" 
                id="text-input"
                onChange={handleChange} 
                value={todo}
                onKeyPress={handleKeyPress}
            />
            <button id="text-field-btn" onClick={handleSubmit}>Add</button>
        </div>
    )}

export default TextField;
