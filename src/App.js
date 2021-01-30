import React, { useState } from 'react';
import './stylesheets/reset.css';
import './stylesheets/app.css';
import Header from "./components/header"
import TextField from "./components/text_field"
import TodoList from "./components/todo_list"
import FilterMenu from "./components/filter_menu"
import { saveToLocalStorage, fetchFromLocalStorage } from "./utils/local_storage"
import { addToList, removeFromList } from "./utils/list_functions";

function App() {

  const [todoList, setTodoList] = useState(fetchFromLocalStorage("todo_list"));
  const [filteredList, setFilteredList] = useState(false);
  const updateTodoInLocalStorage = () => {
    saveToLocalStorage("todo_list", todoList);
  }

  return (
    <div className="app-container fill-window">
      <div className="app"> 
        <Header />
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
      </div>
    </div>
  );
}

export default App;
