// save all tasks to local storage 
export const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, (typeof data === 'string') ? data : JSON.stringify(data))
    
};

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
};

// clear data in local storage 
export const clearLocalStorage = key => localStorage.removeItem(key);