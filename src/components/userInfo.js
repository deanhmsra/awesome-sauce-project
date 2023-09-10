import React, { useState, useEffect } from 'react';

export default function UserInfo(){
const [users, setUsers] = useState([]);

useEffect(()=>{
    const fetchData = async () => {
        const response = await fetch('http://localhost:3000/users')
        const jason = await response.json()
        setUsers(jason)
    }
    fetchData()
})
    return (
        <div>
            {users.map((user, i)=>(
            <p key={i}>
                <h2>User Information</h2>
                <p>Name: {user.user_first_name}</p>
                <p>Age: {user.age}</p>
                <p>Personality Type: {user.personality_type}</p>
                <p>Interests: {user.interests}</p>
            </p>
            ))}
        </div>
    )
}
