import React from "react";
import userConnect from "./userConnect";
import events from "./events";


const userConnect = () => {
    return (
        <div>
            <h1>Connect with User</h1>

         {/* Rendered the userConnect component */}
            <userConnect />
        </div>
    )
}


const UserFeed = () => {
    return (
      <div>
        <h1>Events Table</h1>
        
        {/* Rendered the EventsTable component */}
        <EventsTable />
      </div>
    );
  };

  


export default UserFeed;