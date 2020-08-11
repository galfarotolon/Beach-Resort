import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';


//Import components
import Home from './components/Home'
import Rooms from './components/Rooms'
import RoomDetails from './components/RoomDetails'
import Error from './components/Error'

import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <h1>Beach Resort</h1>
      <Navbar />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/rooms' component={Rooms} />
        <Route exact path='/rooms/:room-details' component={RoomDetails} />
        <Route component={Error} />
      </Switch>

    </div >
  );
}

export default App;
