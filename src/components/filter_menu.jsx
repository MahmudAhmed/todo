import React, { useState } from 'react';
import { filterByDone, filterByInc } from '../utils/list_functions';

function FilterMenu({ todoList, setFilteredList}) {

    const [selected, setSelected] = useState("All");

    const handleColorSelection = (selectionId) => {
        let currentSelection = document.getElementById(selectionId);
        if (selected !== selectionId) {
            const prevSelected = document.getElementById(selected);
            prevSelected.classList.remove("selected")
            setSelected(selectionId);
            currentSelection.classList.add("selected")
        } 
    }
    const handleAll = () => {
        handleColorSelection("All")
        setFilteredList(false)
    }

    const handleIncomplete = () => {
        handleColorSelection("Incomplete")
        filterByInc({ todoList, setFilteredList })
    }

    const handleCompleted = () => {
        handleColorSelection("Completed")
        filterByDone({ todoList, setFilteredList})
    }

    return (
        <ul className="filter-menu">
            <li onClick={handleAll} id="All" className="selected">All Tasks</li>
            <li onClick={handleIncomplete} id="Incomplete">Incomplete</li>
            <li onClick={handleCompleted} id="Completed">Completed</li>
        </ul>
    );
}

export default FilterMenu;
