import React from 'react';

const SocialMedia = ({ instagram, facebook, email}) => {

    return (
        <div>
            <h1>Connect With Me Here</h1>
            <p><a href={instagram}>Instagram</a></p>
            <p><a href={facebook}>Facebook</a></p>
            <p><a href={`mailto:${email}`}>Email</a></p>
        </div>
        )
    } 




    // instagram, facebook and email
