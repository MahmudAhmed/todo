import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import {
    MuiPickersUtilsProvider,
    KeyboardDateTimePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
 

function DueDate({ todo, updateTodoInLocalStorage }) {
    const [editMode, setEditMode] = useState(false);
    const [dueDate, changeDueDate] = useState(todo.date);

    const handleDateSelection = (newDate) => {
        changeDueDate(newDate);
        setEditMode(!editMode);
        todo.date = newDate;
        updateTodoInLocalStorage();
    }

    const dateSelection = () => {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDateTimePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Select a due date"
                    format="MM/dd/yyyy"
                    value={dueDate}
                    onChange={handleDateSelection}
                    minDate={new Date()}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </MuiPickersUtilsProvider>
        )
    }


    return (
        <div className="item-due-date-container" >
            <div className="item-due-date-header">
                <h2 className="details-h2">Due Date</h2>
                <div title="Edit Due Date" id="edit-icon-container" onClick={() => setEditMode(!editMode)}><FontAwesomeIcon id="edit-icon" icon={faEdit} /></div>
            </div>
            <div className="due-date-container">
                {
                    editMode ? dateSelection() : (dueDate ? <p onClick={() => setEditMode(!editMode)}>{new Date(dueDate).toLocaleDateString('en-US')}</p> : 
                        <div id="add-due-date-text" onClick={() => setEditMode(!editMode)}><p>Click to add a due date</p></div>)
                }
            </div>

            
        </div>
    )
}

export default DueDate;
