import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const users = [
    { username: 'John Doe', userPhoto: 'http://placekitten.com/200/300' },
    { username: 'John Doe', userPhoto: 'http://placekitten.com/200/309' },
    { username: 'John Doe', userPhoto: 'http://placekitten.com/200/303' },
    { username: 'John Doe', userPhoto: 'http://placekitten.com/200/305' },
    { username: 'John Doe', userPhoto: 'http://placekitten.com/200/307' }
]
export default function displayUsersPersonality() {
    return(
        <ListGroup className="user-personality">
            {users.map(user => (
                <div className="list-item-personality" key={user.id}>
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