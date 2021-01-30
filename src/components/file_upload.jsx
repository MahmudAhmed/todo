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
            setAttachment(null)
        })
    }

    return (
        <div>
            { attachment ? <a href={todo.url} target="_blank" rel="noreferrer" >{attachment}</a> : <input type="file" onChange={handleUpload} /> }
            <div onClick={handleDelete}>X</div>
        </div>
        
    );
}

export default FileUpload;