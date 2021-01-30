import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';


function DueDate({ todo, updateTodoInLocalStorage }) {
    const [, forceUpdate] = React.useState(true);
    const [editMode, setEditMode] = React.useState(false);
    const [dueDate, changeDueDate] = React.useState(todo.due);

    const handleDateSelection = (newDate) => {
        changeDueDate(newDate);
        setEditMode(!editMode);
        todo.due = newDate;
        updateTodoInLocalStorage();
    }


    return (
        <div className="due-date-container" >
            <div className="item-due-date-header">
                <h2 className="details-h2">Due Date</h2>
                <div id="edit-icon-container" onClick={() => setEditMode(!editMode)}><FontAwesomeIcon id="edit-icon" icon={faEdit} /></div>
            </div>
            <div className="due-date-container">
                {
                    editMode ? (
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
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
                    ) : <div>{new Date(dueDate).toLocaleDateString('en-US')}</div>
                }
            </div>

            
        </div>
    )
}

export default DueDate;
