import React, { useState } from 'react';

function Flagg({ todo, updateTodoInLocalStorage, forceUpdate }) {
    const [flagged, toggleFlag] = useState(todo.flagged);

    const handleChange = () => {
        todo.flagged = !flagged;
        toggleFlag(!flagged);
        updateTodoInLocalStorage();
        forceUpdate(n => !n);
    }

    return (
        <div className="flagg-container">
            <h2 className="details-h2">Priority</h2>
            <label class="label" >
                <div class="toggle">
                    <input onChange={handleChange} defaultChecked={flagged} class="toggle-state" type="checkbox" name="check" value="check" />
                    <div class="indicator"></div>
                </div>
            </label>
        </div>

    );
}

export default Flagg;