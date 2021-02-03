import CalendarToggle from "./calendar_toggle";

function Header({setCalendarViewMode}) {
    return (
        <div className="header-container">
            <div className="header">
                <h1 id="sticky-title">QuickList</h1>
            </div>
            <div id="calendar-toggle-container">
                <CalendarToggle setCalendarViewMode={setCalendarViewMode}/>
            </div>
        </div>
    );
}

export default Header;
