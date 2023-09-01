import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const users = [
    { username: 'John Doe', userPhoto: 'http://placekitten.com/200/300' },
    { username: 'John Doe', userPhoto: 'http://placekitten.com/200/309' },
    { username: 'John Doe', userPhoto: 'http://placekitten.com/200/303' },
    { username: 'John Doe', userPhoto: 'http://placekitten.com/200/305' },
    { username: 'John Doe', userPhoto: 'http://placekitten.com/200/307' }
]
export default function displayUsersInterest() {
    return(
        <ListGroup className="user-interest">
            {users.map(user => (
                <div className="list-item-interest" key={user.id}>
                <ListGroup.Item>
                    <div className="profile-info">
                    <img src={user.userPhoto} alt={user.username} className="profile-photo" />
                    <div className="user-details">
                        <h3 className="user-name">{user.username}</h3>
                    <button className="view-profile">View Profile</button>
                    </div>
                    </div>
                </ListGroup.Item>
                </div> 
            ))}
        </ListGroup>
    )
}