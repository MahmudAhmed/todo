import React, { useState, useEffect } from 'react';
import './stylesheets/reset.css';
import './stylesheets/app.css';
import Header from "./components/header";
import TextField from "./components/text_field";
import TodoList from "./components/todo_list";
import FilterMenu from "./components/filter_menu";
import ClearData from "./components/clear_data_btn";
import { Footer } from "./components/footer";
import { saveToLocalStorage, fetchFromLocalStorage } from "./utils/local_storage"
import { addToList, removeFromList } from "./utils/list_functions";
import CalendarView from "./components/calendar_view";
import Modal from "./components/modal";
import Settings from "./components/settings";

function App() {
  const [todoList, setTodoList] = useState(fetchFromLocalStorage("todo_list"));
  const [filteredList, setFilteredList] = useState(false);
  const [calendarViewMode, setCalendarViewMode] = useState(false);

  // componentDidMount - If there is a backgorund color found in local storage, sets background color of .app 
  useEffect(() => {
    const color = localStorage.getItem("bgColor");
    if (color) {
      let element = document.getElementById(`app`);
      element.style.backgroundColor = color;
      console.log("color:", element.style.backgroundColor)
    }
  }, []);


  const updateTodoInLocalStorage = () => {
    saveToLocalStorage("todo_list", todoList);
  }

  const displayListView = () => {
    return (
      <>
        <TextField
          addToList={addToList}
          todoList={todoList}
          setTodoList={setTodoList}
        />
        <FilterMenu
          todoList={todoList}
          setFilteredList={setFilteredList}
        />
        <TodoList
          todoList={filteredList ? filteredList : todoList}
          setTodoList={setTodoList}
          removeFromList={removeFromList}
          updateTodoInLocalStorage={updateTodoInLocalStorage}
        />
      </>
    )
  }

  return (
    <div className="app-container fill-window">
      <div className="app" id="app"> 
        <Modal ContentComponent={Settings} />
        <Header setCalendarViewMode={setCalendarViewMode} />
        <div className="view-container">
          {calendarViewMode ? <CalendarView todoList={todoList} /> : displayListView()}
        </div>
        <Footer />
        <ClearData setTodoList={setTodoList}/>
      </div>
    </div>
  );
}

export default App;
