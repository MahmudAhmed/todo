import React from 'react';
import ListItem from "./list_items";
import TodoTitle from "./todo_title";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { randomSelectEmoji } from "../utils/list_functions";

function TodoList({ todoList, removeFromList, setTodoList, updateTodoInLocalStorage }) {
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

    const handleRemoval = (e, todo) => {
        e.stopPropagation(); // disable bubble up effect on your element clicks
        removeFromList(todo, { setTodoList, todoList })
    };

    const displayAccordian = () => (
        <Accordion>
            {
                todoList.map((todo, key) => (
                    <Card>
                        <Accordion.Toggle 
                            as={Card.Header} 
                            eventKey={key + 1} 
                            className={todo.flagged ? "flagged" : ""}
                        >
                            <TodoTitle 
                                todo={todo} 
                                handleCompletion={handleCompletion} 
                                handleRemoval={handleRemoval} 
                                updateTodoInLocalStorage={updateTodoInLocalStorage} 
                                forceUpdate={forceUpdate}
                            />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={key + 1}>
                            <Card.Body>
                                <ListItem
                                    todo={todo}
                                    updateTodoInLocalStorage={updateTodoInLocalStorage}
                                    forceUpdate={forceUpdate}
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
                    <div id="emoji">{randomSelectEmoji()}</div>
                    <p>No Task's Found</p>
                </div>
            ) : displayAccordian() } 
        </div>
    )
}

export default TodoList;
