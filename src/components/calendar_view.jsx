import React from "react";
import FullCalendar  from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'


function CalendarView({ todoList }) {

    const handleEventClick = (e) => {
        e.jsEvent.cancelBubble = true;
        e.jsEvent.preventDefault();
    }

    return (
        <div className="calendar-container">
        
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                initialView='dayGridMonth'
                allDayContent={false}
                eventClick={handleEventClick}
                events={todoList}
            />
        </div>
    );
}

export default CalendarView;
