import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

function TodoTitle({ todo, handleRemoval, handleCompletion}) {

    const [title, changeTitle] = useState(todo.title)

    const displayIcons = () => {
        return (
            <div className="item-icons-container">
                <div>{todo.done ? <FontAwesomeIcon icon={faCheckSquare} onClick={(e) => handleCompletion(e, todo)} /> :
                    <FontAwesomeIcon icon={faSquare} onClick={(e) => handleCompletion(e, todo)} />}</div>
                <div><FontAwesomeIcon icon={faTrash} onClick={(e) => handleRemoval(e, todo)} /></div>
            </div>
        )
    }
    return (
        <div 
            className="todo-title-container" 
            id={`todo#${todo.id}`}
            className={["todo-title-container", todo.done ? "strikethrough" : ""].join(" ")}
            >
            <p id="todo-title">{title}</p>
            {displayIcons()}
        </div>
    );
}

export default TodoTitle;
