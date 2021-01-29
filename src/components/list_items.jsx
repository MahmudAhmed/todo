import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import Details from './details';

function ListItem({ todo, removeFromList, updateTodoInLocalStorage }) {

    const [, forceUpdate] = React.useState(true);


    const handleCompletion = () => { 
        todo.done = !todo.done;  

        var element = document.getElementById(`todo#${todo.id}`);
        if (todo.done) {
            element.classList.add("strikethrough")
        } else {
            element.classList.remove("strikethrough")
        }
        updateTodoInLocalStorage();

        // rerenders which Icon is showing for status.
        forceUpdate(n => !n);
    };

    return (
        <div className="item-container">
            <div>
                <Details updateTodoInLocalStorage={updateTodoInLocalStorage} todo={todo}/>
                <div className="due-date-container" >
                    <h2>Due Date:</h2>
                    {todo.due ? <p>todo.due</p> : <p>Add a due date</p>}
                </div>
            </div>
            <div className="item-icons-container">
                <div>{todo.done ? <FontAwesomeIcon icon={faCheckSquare} onClick={() => handleCompletion()} /> : 
                    <FontAwesomeIcon icon={faSquare} onClick={() => handleCompletion()} /> }</div>
                <div onClick={() => removeFromList(todo.id)} ><FontAwesomeIcon icon={faTrash} /></div>
            </div>
        </div>
    )
}

export default ListItem;
