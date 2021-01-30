import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
// import { faSquare } from '@fortawesome/free-regular-svg-icons';
import Details from './details';
import DueDate from './due_date';
import FileUpload from './file_upload';

function ListItem({ todo, removeFromList, updateTodoInLocalStorage, setTodoList, todoList}) {

    return (
        <div className="item-container">
            <div>
                <Details updateTodoInLocalStorage={updateTodoInLocalStorage} todo={todo}/>
                <DueDate updateTodoInLocalStorage={updateTodoInLocalStorage} todo={todo} />
            </div>    
            <FileUpload updateTodoInLocalStorage={updateTodoInLocalStorage} todo={todo} />      
        </div>
    )
}

export default ListItem;
