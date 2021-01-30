import React from 'react'
import ListItem from "./list_items"
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { randomSelectEmoji } from "../utils/list_functions";

function TodoList({ todoList, removeFromList, setTodoList, updateTodoInLocalStorage }) {

    const [, forceUpdate] = React.useState(true);
    const [emoji] = React.useState(randomSelectEmoji());

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

    const handleRemoval = (e, todo) => {
        e.stopPropagation();
        removeFromList(todo, { setTodoList, todoList })
    };

    const displayAccordian = () => (
        <Accordion>
            {
                todoList.map((todo, key) => (
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey={key + 1} id={`todo#${todo.id}`} className={todo.done ? "strikethrough" : ""}>
                            {todo.title}
                            <div className="item-icons-container">
                                <div>{todo.done ? <FontAwesomeIcon icon={faCheckSquare} onClick={(e) => handleCompletion(e, todo)} /> :
                                    <FontAwesomeIcon icon={faSquare} onClick={(e) => handleCompletion(e, todo)} />}</div>
                                <div><FontAwesomeIcon icon={faTrash} onClick={(e) => handleRemoval(e, todo)} /></div>
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={key + 1}>
                            <Card.Body>
                                <ListItem
                                    todo={todo}
                                    todoList={todoList}
                                    removeFromList={removeFromList}
                                    setTodoList={setTodoList}
                                    updateTodoInLocalStorage={updateTodoInLocalStorage}
                                />
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                ))
            }
        </Accordion> 
    )


    return (
        <div className="data-container">
            { todoList.length === 0 ? (
                <div className="emoji-container">
                    <div>{emoji}</div>
                    <p>No Task's Found</p>
                </div>
            ) : displayAccordian() } 
        </div>
    )
}

export default TodoList;
