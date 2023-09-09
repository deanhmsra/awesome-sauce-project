import React from 'react';
import Button from 'react-bootstrap/Button';

function home (){
    return (
        <div className="home">
        <h1 className="text-center">Welcome to Meet'n'Greet</h1>
        <div className="photo">
        <img src="https://www.allegiantstadium.com/assets/img/SBLVIII_Logo_800x500-8f16504983.jpg" alt="logo" className="logo" />
        </div>
        <a href="/events">
        <Button variant="dark">View Events</Button>
        </a>
        <a href= "https://www.16personalities.com/free-personality-test"> 
                    <Button variant="dark">Take Personality Test</Button>
                    </a>
        </div>
    )
}

export default home;