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
            <label>{flagged ? "True" : "False"}</label>
            <input type="checkbox" onChange={handleChange} value={flagged}/>
        </div>

    );
}

export default Flagg;