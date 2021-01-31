import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheckSquare, faSave } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

function TodoTitle({ todo, handleRemoval, handleCompletion, updateTodoInLocalStorage, forceUpdate}) {

    const [title, changeTitle] = useState(todo.title)
    const [editMode, setEditMode] = useState(false);
    debugger
    const handleChange = e => { changeTitle(e.target.value) };

    const displayIcons = () => {
        return (
            <div className="item-icons-container">
                <div>{todo.done ? <FontAwesomeIcon icon={faCheckSquare} onClick={(e) => handleCompletion(e, todo)} /> :
                    <FontAwesomeIcon icon={faSquare} onClick={(e) => handleCompletion(e, todo)} />}</div>
                <div><FontAwesomeIcon icon={faTrash} onClick={(e) => handleRemoval(e, todo)} /></div>
            </div>
        )
    }

    const handleTitleClick = (e) => {
        e.stopPropagation();
        setEditMode(!editMode)
    };

    const handleSubmit = (e) => {
        e.stopPropagation();
        todo.title = title; 
        setEditMode(false);
        updateTodoInLocalStorage();
        forceUpdate(n => !n);

    }



    return (
        <div 
            id={`todo#${todo.id}`}
            className={["todo-title-container", todo.done ? "strikethrough" : ""].join(" ")}
            >
            { editMode ? (
                <div class="todo-title-input-container">
                    <input
                        onClick={e => e.stopPropagation()}
                        type="text"
                        value={todo.title}
                        onChange={handleChange}
                        autofocus
                        id="title-input"
                    /> 
                    <button id="title-field-btn" onClick={handleSubmit}><FontAwesomeIcon icon={faSave} id="save-icon"/></button>
                </div>
                
                
            ) : <p id="todo-title" onClick={handleTitleClick} >{todo.title}</p>}
            {displayIcons()}
        </div>
    );
}

export default TodoTitle;
