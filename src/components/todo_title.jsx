import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

function TodoTitle({ todo, handleRemoval, handleCompletion}) {

    const [title, changeTitle] = useState(todo.title)
    const [editMode, setEditMode] = useState(false);
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



    return (
        <div 
            id={`todo#${todo.id}`}
            className={["todo-title-container", todo.done ? "strikethrough" : ""].join(" ")}
            >
            { editMode ? (
                <input 
                    onClick={e => e.stopPropagation()}
                    type="text" 
                    value={title} 
                    onChange={handleChange} 
                /> ) : <p id="todo-title" onClick={handleTitleClick} >{title}</p>}
            {displayIcons()}
        </div>
    );
}

export default TodoTitle;
