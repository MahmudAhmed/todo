import CalendarToggle from "./calendar_toggle";

function Header() {
    return (
        <div className="header-container">
            <div className="header">
                <h1>QuickList</h1>
            </div>
            <div id="calendar-toggle-container">
                <CalendarToggle />
            </div>
        </div>
    );
}

export default Header;
