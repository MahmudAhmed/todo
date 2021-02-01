import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faList } from "@fortawesome/free-solid-svg-icons";

function CalendarToggle({ setCalendarViewMode }) {
    return (
        <div className="calendar-toggle-container">
            <FontAwesomeIcon icon={faList} id="list-icon" />
            <div className="flagg-container">
                <label class="label" >
                    <div class="toggle">
                        <input 
                            onChange={() => setCalendarViewMode(n => !n)} 
                            class="toggle-state" 
                            type="checkbox" 
                            name="check" 
                            value="check" 
                        />
                        <div class="indicator"></div>
                    </div>
                </label>
            </div>
            <FontAwesomeIcon icon={faCalendar} id="calendar-icon" />
        </div>

    );
}

export default CalendarToggle;