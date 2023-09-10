import React from 'react';

const SocialMedia = ({ instagram, facebook, email}) => {

    return (
        <div className="connect-info">
            <h1>Connect With Me Here</h1>
            <p><a href={instagram} className="link-with-border">Instagram</a></p>
            <p><a href={facebook} className="link-with-border">Facebook</a></p>
            <p><a href={`mailto:${email}`} className="link-with-border">Email</a></p>
        </div>
        )
    } 



export default SocialMedia;
