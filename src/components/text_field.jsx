import React, { useState } from 'react'

function TextField({addToList}) {
    const [value, setValue] = useState('');
    const handleChange = e => { setValue(e.target.value) };
    return (
        <div>
            <input 
                name="title"
                type="text" 
                placeholder="get milk" 
                onChange={handleChange} 
                value={value}
            />
            <button onClick={ () => {
                addToList(value)
                setValue("")
            }}>+ Add Todo</button>
        </div>
    )}

export default TextField;
