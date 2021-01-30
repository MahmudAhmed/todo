import React, { useState } from 'react';
import { filterByDone, filterByInc } from '../utils/list_functions';

function FilterMenu({ todoList, setFilteredList}) {

    const handleAll = () => {
        setFilteredList(false)
    }

    const handleIncomplete = () => {
        filterByInc({ todoList, setFilteredList })
    }

    const handleCompleted = () => {
        filterByDone({ todoList, setFilteredList})
    }

    return (
        <ul className="filter-menu">
            <li onClick={handleAll}>All</li>
            <li onClick={handleIncomplete}>Incomplete</li>
            <li onClick={handleCompleted}>Completed</li>
        </ul>
    );
}

export default FilterMenu;
