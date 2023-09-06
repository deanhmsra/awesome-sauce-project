import React from 'react';
import EventInfo from './eventInfo';

// rendering multiple instances of eventInfo.js
const EventsTable = () => {
    const eventsData = [
        { name: 'Event 1', date: 'February 20, 2024 - 12:00PM', location: 'East Side Stadium'},
        { name: 'Event 2', date: 'February 20, 2024 - 13:00PM', location: 'West Side Stadium'}
    ];


    return (
        <div className="container mt-4"> //added class to create container, mt-4 adds top margin space
          <h1 className="text-center">Events</h1>
          <table className="table table-striped"> //bootstrap table stylings
            <thead className="thead-dark"> //darkens table header
              <tr>
                <th>Event Name</th>
                <th>Date & Time</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {eventsData.map((event, index) => (
                <EventInfo
                  key={index}
                  eventName={event.name}
                  eventDate={event.date}
                  eventLocation={event.location}
                />
              ))}
            </tbody>
          </table>
        </div>
      );
    };

export default EventsTable;