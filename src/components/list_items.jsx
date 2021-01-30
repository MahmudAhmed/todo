import React from 'react';
import Details from './details';
import DueDate from './due_date';
import FileUpload from './file_upload';

function ListItem({ todo, updateTodoInLocalStorage}) {

    return (
        <div className="item-container">
            <div className="item-left-container" >
                <Details updateTodoInLocalStorage={updateTodoInLocalStorage} todo={todo}/>
                <DueDate updateTodoInLocalStorage={updateTodoInLocalStorage} todo={todo} />
            </div> 
            <div className="item-right-container" >
                <FileUpload updateTodoInLocalStorage={updateTodoInLocalStorage} todo={todo} /> 
            </div>     
        </div>
    )
}

export default ListItem;
