import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';


function Details ({ todo, updateTodoInLocalStorage }) {

    const [, forceUpdate] = React.useState(true);
    const [details, setDetails] = React.useState(todo.details ? todo.details : "");
    const [editMode, setEditMode] = React.useState(false);

    const handleDetailChange = (e) => { setDetails(e.target.value) }

    const handleDetailSubmit = () => {
        todo.details = details;
        updateTodoInLocalStorage();
        forceUpdate(n => !n);
    }

    const detailsForm = () => {
        return (
            <form onSubmit={handleDetailSubmit}>
                <textarea value={details} onChange={handleDetailChange} 
                    placeholder="add a description"/>
                <input type="submit" value="Submit" />
            </form>
        );
    }

    return (
        <div className="item-detail-container" >
            <div className="item-detail-header">
                <h2 className="details-h2">Discription</h2>
                <div title="Edit Discription" id="edit-icon-container" onClick={() => setEditMode(!editMode)}><FontAwesomeIcon id="edit-icon" icon={faEdit} /></div>
            </div>
            { editMode ? detailsForm() : (todo.details ? <p>{todo.details}</p> : <div id="add-description-text" onClick={() => setEditMode(!editMode)}><p>Click to add a description</p></div>) }
        </div>
    )
}

export default Details;
