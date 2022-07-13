import React, { useState } from 'react'
import  "./App.css"
import PeopleList from './components/PeopleList';


function App() {

  return (
    <div className="App">
        <div className="title-app"><h1>Birthday Reminder</h1></div>
        <PeopleList />
    </div>
  );
}

export default App;


//  person={users} removeFunc={removeUser}