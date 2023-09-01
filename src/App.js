import './App.css';
import React, {useState} from 'react'
import Nav from './components/nav'
import Profile from './components/profile'
import DisplayUsersInterest from './components/displayUsersInterest';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
return (
  <div>
    <Nav />
    <DisplayUsersInterest />
  </div>
)    
}

export default App;
