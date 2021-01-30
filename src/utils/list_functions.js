import { saveToLocalStorage } from "./local_storage"
import { storage } from '../base';
import { EMOJIS } from "./emojis";

export const addToList = ({ todo, todoList, setTodoList}) => {
    let latestId = 0;
    const date = new Date();
    // gets the latest id from our list in state. 
    if (todoList.length === 1) {
        latestId = 1;
    } else if (todoList.length > 1) {
        latestId = todoList.reduce((latest, todo) => {
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

export const removeFromList = (todoToDelete, { todoList, setTodoList, }) => {
    const filteredList = todoList.filter(todo => todo.id !== todoToDelete.id);
    debugger
    setTodoList(filteredList);
    saveToLocalStorage("todo_list", filteredList);
    if (todoToDelete.file) {
        // delete attachment from Storage 
        const storageRef = storage.ref()
        const fileRef = storageRef.child(todoToDelete.file);
        fileRef.delete().then(() => {
            setTodoList(filteredList);
            saveToLocalStorage("todo_list", filteredList);
        })
    } 
}

export const filterByDone = ({ todoList, setFilteredList}) => {
    const filteredList = todoList.filter( todo => todo.done );
    setFilteredList(filteredList);
}

export const filterByInc = ({ todoList, setFilteredList }) => {
    const filteredList = todoList.filter(todo => !todo.done);
    setFilteredList(filteredList);
}

export const randomSelectEmoji = () => {
    return EMOJIS[Math.floor(Math.random() * EMOJIS.length)]
}