import React from 'react';


const UserInfo = ({ userName, age, personalityType, interests }) => {
    return (
        <div>
            <h2>User Information</h2>
            <p>Name: {userName}</p>
            <p>Age: {age}</p>
            <p>Personality Tye: {personalityType}</p>
            <p>Interests: {interests}</p>
        </div>
    );
};

const interests = ['Bar Hopping', 'Reading', 'Football'];




export default UserInfo;