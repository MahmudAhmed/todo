This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To Run App on Local

In the project directory, you can run:

### `yarn install` or `npm install`

To install all dependencies. 


### `yarn start` or `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
  
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

    const handleCompletion = () => { 
        todo.done = !todo.done;  
        updateTodoInLocalStorage();

         // rerenders which Icon is showing for status
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
