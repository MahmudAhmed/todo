import React from 'react';
import Details from './details';
import DueDate from './due_date';
import FileUpload from './file_upload';
import Flagg from './flagg';

function ListItem({ todo, updateTodoInLocalStorage, forceUpdate}) {

    return (
        <div className="item-container">
            <div className="item-left-container" >
                <Details updateTodoInLocalStorage={updateTodoInLocalStorage} todo={todo}/>
                <DueDate updateTodoInLocalStorage={updateTodoInLocalStorage} todo={todo} />
            </div> 
            <div className="item-right-container" >
                <FileUpload updateTodoInLocalStorage={updateTodoInLocalStorage} todo={todo} /> 
                <Flagg updateTodoInLocalStorage={updateTodoInLocalStorage} forceUpdate={forceUpdate} todo={todo}/>
            </div>     
        </div>
    )
}

export default ListItem;
