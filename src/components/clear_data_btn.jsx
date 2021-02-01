import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { clearLocalStorage } from "../utils/local_storage";

function ClearData({setTodoList}) {

    const handleClearClick = () => {
        if (window.confirm('Are you sure you wish to delete ALL of your tasks?!')) {
            setTodoList([]);
            clearLocalStorage("todo_list");
        }
    }

    return (
        <div className="clear-data-container">
            <FontAwesomeIcon id="clear-data-btn" icon={faTrashAlt} onClick={handleClearClick} />
        </div>
    );
}

export default ClearData;
