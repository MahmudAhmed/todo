import React, { useState } from 'react'

function TextField({addToList}) {
    const [value, setValue] = useState('');
    const handleChange = e => { setValue(e.target.value) };

    const handleSubmit = e => {
        if(value !== "") {
            addToList(value);
            setValue("");
        } else {
            alert("Todo Can't be Black!");
        }
    }

    return (
        <div>
            <input 
                name="title"
                type="text" 
                placeholder="get milk" 
                onChange={handleChange} 
                value={value}
            />
            <button onClick={handleSubmit}>+ Add Todo</button>
        </div>
    )}

export default TextField;
