import React, { useState } from 'react';
import './stylesheets/reset.css';
import './stylesheets/app.css';
import Header from "./components/header"
import TextField from "./components/text_field"
import TodoList from "./components/todo_list"
import { saveToLocalStorage, fetchFromLocalStorage } from "./utils/local_storage"
import { storage } from './base';

function App() {

  const [todoList, setTodoList] = useState(fetchFromLocalStorage("todo_list"));

  const addToList = (todo) => {
    let latestId = 0;
    const date = new Date();
    // gets the latest id from our list in state. 
    if (todoList.length === 1) {
      latestId = 1;
    } else if (todoList.length > 1) {
      latestId = todoList.reduce( (latest, todo) => {
        if (latest > todo.id) {
          return latest;
        } else {
          return todo.id;
        }
      })
    } 

    // nomalizing our new todo
    const todoItem = {
      id: latestId + 1,
      title: todo,
      due: new Date(date.setDate(date.getDate() + 1)),
    }

    const newList = [...todoList, todoItem];
    setTodoList(newList)

    // saving to local storage
    saveToLocalStorage("todo_list", newList);
  }

  const removeFromList = (id) => {
    const todo = todoList.find( todo => todo.id === id);
    const filteredList = todoList.filter( todo => todo.id !== id );

    // delete attachment from Storage 
    const storageRef = storage.ref()
    const fileRef = storageRef.child(todo.file);
    fileRef.delete().then(() => {
      setTodoList(filteredList);
      saveToLocalStorage("todo_list", filteredList);
    })

  }

  const updateTodoInLocalStorage = () => {
    saveToLocalStorage("todo_list", todoList);
  }

  return (
    <div className="app-container fill-window">
      <div className="app"> 
        <Header />
        <TextField addToList={ addToList } />
        <TodoList todoList={todoList} removeFromList={removeFromList} updateTodoInLocalStorage={updateTodoInLocalStorage}/>
      </div>
    </div>
  );
}

export default App;
