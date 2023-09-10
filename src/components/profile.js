import React from 'react';
import UserInfo from './userInfo';
import UserConnect from './userConnect';
import Button from 'react-bootstrap/Button';


const Profile = () => {
    const userName = 'John Doe'; 
    const age = 25; 
    const personalityType = 'INTJ'; 
    const interests = ['Bar Hopping',' , ', 'Reading',' , ', 'Football'];
    const instagram = 'https://www.instagram.com/instagram/';
    const facebook = 'https://www.facebook.com/facebook/';
    const email = 'hVh5I@example.com';



return (
    <div className="container1">
    <div className="centered-div">
        <h1 style={{color: "rgb(32, 22, 72, 255)"}}>Profile</h1>
        <div className="user-container">
            <div className="user-info">
                <img
                src='https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'
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
                            instagram={instagram}
                            facebook={facebook}
                            email={`mailto:${email}`}
                        />
            </div>
        </div>
        <Button variant="dark"  text-align="center" onClick={() => window.location.href = "/profile"}>Update Profile</Button>
    </div>
    </div>
)};


export default Profile;