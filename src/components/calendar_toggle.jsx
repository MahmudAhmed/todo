import React from 'react';

function CalendarToggle({ setCalendarViewMode }) {
    return (
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

    );
}

export default CalendarToggle;