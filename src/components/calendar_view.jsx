import React, { useState } from "react";
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

function CalendarView({ todoList }) {

    // const [title, changeTitle] = useState("")

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
                initialView='timeGridDay'
                allDayContent={false}
                eventClick={handleEventClick}
                events={todoList}
            />
        </div>
    );
}

export default CalendarView;
