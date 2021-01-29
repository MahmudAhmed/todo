export const saveToLocalStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));

export const fetchFromLocalStorage = key => {
    const value = localStorage.getItem(key); 

    let todoItems = [];

    if (value) {
        const parsedJSON = JSON.parse(value);
        if (Array.isArray(parsedJSON)) { todoItems = parsedJSON }
    } 
    return todoItems;
}
