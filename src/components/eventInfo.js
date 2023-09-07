import React from 'react';

//details of a single event
const EventInfo = ({ eventName, eventDate, eventLocation}) => {
    return (
        <div>
            <h1>SuperBowl Meets!</h1>
            <h2>{eventName}</h2>
            <p>Date & Time: {eventDate}</p>
            <p>Location: {eventLocation}</p>
        </div>
    );
};

export default EventInfo;