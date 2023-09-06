import React from 'react';


export default function Profile() {
  return (
    <div className="profile-container">
      {/* User Profile Picture */}
      <div className="profile-picture">
        <img src="url_to_user_profile_image" alt="User Profile" />
      </div>

      {/* User Information */}
      <div className="user-info">
        <h1>Username</h1>
        <p>Personality Type: INFJ</p>
        <p>Bio: This is a brief user bio.</p>
      </div>

      {/* List of Friends */}
      <div className="friends-list">
        <h2>Friends</h2>
        <ul>
          <li>Friend 1</li>
          <li>Friend 2</li>
          <li>Friend 3</li>
        </ul>
      </div>

      {/* Edit Profile Button */}
      <button className="edit-profile-button">Edit Profile</button>
    </div>
  );
};
