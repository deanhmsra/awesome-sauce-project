import React from 'react';
import UserInfo from './userInfo';
import UserConnect from './userConnect';


const Profile = () => {
    const userName = 'John Doe'; 
    const age = 25; 
    const personalityType = 'INTJ'; 
    const interests = ['Bar Hopping', 'Reading', 'Football'];
    const instagram = 'https://www.instagram.com/johndoe/';
    const facebook = 'https://www.facebook.com/johndoe/';
    const email = 'hVh5I@example.com';



return (
    <div>
        <h1>Profile</h1>
        <div className="user-container">
            <div className="user-info">
                <img
                src="http://placekitten.com/200/300"
                className="main-profile-photo"
                alt="Profile Pic"
                />
                <UserInfo
                userName={userName}
                age={age}
                personalityType={personalityType}
                interests={interests}
                />
            </div>
            <div className="user-connect">
                <UserConnect
                className="connect-user"
                instagram={<a href={facebook} className="link-with-border">Instagram</a>}
                facebook={<a href={facebook} className="link-with-border">Facebook</a>}
                email={<a href={`mailto:${email}`} className="link-with-border">Email</a>}
                />
            </div>
        </div>
    </div>
)};


export default Profile;