This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# QuickList
***

## Description
<p align="center">
  <img width="600" height="500" src="./assets/ql-1.png">
</p>
QuickList minimalistic single page Todo App, built with React.  

## Technologies
* Frontend: JavaScript/React/Redux
* HTML5/CSS
* Webpack
* Firebase - Storage

## Installation 


### Setting up
Please run the following commands:
```
npm install (`yarn install` for mac users)
```
To install all dependencies. 


## To Run App on Local

In the project directory, you can run:

### Running the app
Please run the following commands in separate tabs:
```
npm start (`yarn start` for mac users)
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Features 

### Adding a new todo item

<p align="center">
  <img width="600" height="500" src="./assets/ql-3.png">
</p>

Enter task title in the Text Input and click "ADD".

### Adding Details to Item

<p align="center">
  <img width="600" height="500" src="./assets/ql-2.png">
</p>

Add todo first, and then you can edit details in dropdown. 

### Adding Due Date

<p align="center">
  <img width="600" height="500" src="./assets/ql-5.png">
</p>

### Flag items that are a priority

<p align="center">
  <img width="600" height="500" src="./assets/ql-4.png">
</p>

### Mark todo items as complete

<p align="center">
  <img width="600" height="500" src="./assets/ql-7.png">
</p>

### Attach file to todo item

<p align="center">
  <img width="600" height="500" src="./assets/ql-6.png">
</p>
  
## Code 


### Storing Data in Local Storage

  ```
    // save all tasks to local storage 
    export const saveToLocalStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));

    // fetch all tasks from local storage
    export const fetchFromLocalStorage = key => {
        let todoItems = [];
        const value = localStorage.getItem(key); 

        // if fetch was able to retrive data 
        if (value) {
            const parsedJSON = JSON.parse(value);
            if (Array.isArray(parsedJSON)) { todoItems = parsedJSON }
        } 
        return todoItems;
    }

    // clear data in local storage 
    export const clearLocalStorage = key => localStorage.removeItem(key);
  ```

### Updating - "force" render with Todo is updated

  ```
    const [, forceUpdate] = React.useState(true);

    const handleCompletion = (e, todo) => {
        e.stopPropagation();
        todo.done = !todo.done;

        let element = document.getElementById(`todo#${todo.id}`);
        if (todo.done) {
            element.classList.add("strikethrough")
        } else {
            element.classList.remove("strikethrough")
        }
        updateTodoInLocalStorage();

        // rerenders which Icon is showing for status.
        forceUpdate(n => !n);
    };
  ```

### Uploading Files to Cloud Storage 

  ```
    const handleUpload = (e) => {
        const file = e.target.files[0];
        const storageRef = storage.ref()
        const fileRef = storageRef.child(file.name);
        fileRef.put(file).then(() => {
            storageRef.child(file.name).getDownloadURL()
                .then((url) => {
                    todo.url = url;
                    todo.file = file.name;
                    setAttachment(todo.file)
                    updateTodoInLocalStorage();
                })
            })
        }
  ```

### Deleting Storage File associated with Todo

  ```
    const removeFromList = (todoToDelete) => {
      const filteredList = todoList.filter(todo => todo.id !== todoToDelete.id );
      
      if (todoToDelete.file) {
        // delete attachment from Storage 
        const storageRef = storage.ref()
        const fileRef = storageRef.child(todoToDelete.file);
        fileRef.delete().then(() => {
          setTodoList(filteredList);
          saveToLocalStorage("todo_list", filteredList);
        })
      } else {
        setTodoList(filteredList);
        saveToLocalStorage("todo_list", filteredList);
      }
    }
  ```

  ### handling Form submission

  ```
    const handleDetailSubmit = (e) => {
      e.preventDefault();
      todo.details = details;
      setEditMode(false);
      updateTodoInLocalStorage();
    }

    const detailsForm = () => {
      return (
          <form onSubmit={handleDetailSubmit}>
              <textarea value={details} onChange={handleDetailChange} 
                  placeholder="add a description"/>
              <input type="submit" value="Submit" />
          </form>
      );
    }
  ```
