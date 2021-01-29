import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { faSquare } from '@fortawesome/free-regular-svg-icons'

function ListItem({ todo, removeFromList }) {
    return (
        <div className="item-container">
            <div>
                <div className="item-detail-container" >
                    <h2>Details:</h2>
                    {todo.detail ? <p>todo.detail</p> : <p>Add a description</p> }
                </div>
                <div className="due-date-container" >
                    <h2>Due Date:</h2>
                    {todo.due ? <p>todo.due</p> : <p>Add a due date</p>}
                </div>
            </div>
            <div className="item-icons-container">
                <div>{todo.done ? <FontAwesomeIcon icon={[faCheckSquare]} /> : <FontAwesomeIcon icon={faSquare} /> }</div>
                <div><FontAwesomeIcon icon={faEdit} /></div>
                <div onClick={() => removeFromList(todo.id)} ><FontAwesomeIcon icon={faTrash} /></div>
            </div>
        </div>
    )
}

export default ListItem;
