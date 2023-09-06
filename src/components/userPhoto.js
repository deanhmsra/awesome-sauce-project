import React from 'react';

const UserPhoto = ({ src }) => {
    return (
        <div className='user-photo'>
            <img src={src} alt='User Photo' />
        </div>
    )
}