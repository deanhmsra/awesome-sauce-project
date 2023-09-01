import React from 'react';
import eventInfo from './eventInfo';
import EventInfo from './eventInfo';

const EventsTable = () => {
    const eventsData = [
        { name: 'Event 1', date: 'February 20, 2024 - 12:00PM', location: 'Eastside Stadium'},
        { name: 'Event 2', date: 'February 20, 2024 - 13:00PM', location: 'Westside Stadium'}
    ];

return (
    <div>
        <h1>Events</h1>
        {eventsData.map((event, index) => (
            <EventInfo
                key={index}
                eventName={event.name}
                eventDate={event.date}
                eventLocation={event.location}
                />
            ))}
    </div>
 );
};

export default EventsTable;