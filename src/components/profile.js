// export default function Profile() {

// return (
//     <div>
//         <h1>Profile page</h1>
//     </div>
//     )
// } 

import React from 'react';
import UserPhoto from './userPhoto';
import UserInfo from './eventInfo';
import UserFeed from './userFeed';
import UserConnect from './userConnect';

const Profile = ({ user }) => {
    return (
        <div className="profile">
            <UserPhoto src={user.photo} />
            <UserInfo name={user.name} bio={user.bio} />
            <UserFeed posts={user.posts} />
            <UserConnect
                socialMedia={}
                cellPhoneNumber={} />
        </div>
    );
};

export default Profile;