import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';


export default function displayUsersInterest() {
    return(
        <ListGroup className="user-personality">
            <div className="list-item-personality">
            <ListGroup.Item>
                Profile 1

            </ListGroup.Item>
            <ListGroup.Item>
                Profile 2

            </ListGroup.Item>
            <ListGroup.Item>
                Profile 3

            </ListGroup.Item>
            <ListGroup.Item>
                Profile 4

            </ListGroup.Item>
            <ListGroup.Item>
                Profile 5

            </ListGroup.Item>
            </div>
        </ListGroup>
    )
}