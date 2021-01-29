import React, { useState } from 'react'
import ListItem from "./list_items"
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

function TodoList({ todoList, removeFromList }) {
    return (
        <div>
            <Accordion>
                {
                    todoList.map( (todo, key) => (
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey={key + 1}>
                                {todo.title}
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={key + 1}>
                                <Card.Body>
                                    <ListItem todo={todo} removeFromList={removeFromList}/>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    ))
                }
            </Accordion>
                
            
        </div>
    )
}

export default TodoList;
