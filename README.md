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
