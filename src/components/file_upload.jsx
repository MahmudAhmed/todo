import React, { useState } from 'react';
import { storage } from '../base';

function FileUpload({ todo, updateTodoInLocalStorage}) {

    const [attachment, setAttachment] = useState(todo.file);

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

    const handleDelete = () => {
        const storageRef = storage.ref()
        const fileRef = storageRef.child(todo.file);
        fileRef.delete().then(() => {
            todo.url = "";
            todo.file = "";
            setAttachment(null);
            updateTodoInLocalStorage();
        })
    }

    return (
        <div>
            { attachment ? (
                <div className="attachment-container">
                    <a href={todo.url} target="_blank" rel="noreferrer" >{attachment}</a>
                    <p onClick={handleDelete}>X</p>
                </div>
            
            ) : <input type="file" onChange={handleUpload} /> }
        </div>
        
    );
}

export default FileUpload;