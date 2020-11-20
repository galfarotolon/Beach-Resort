import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';


//Import components
import Home from './components/Home'
import Rooms from './components/Rooms'
import RoomDetails from './components/RoomDetails'
import Error from './components/Error'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/rooms' component={Rooms} />
        <Route exact path='/rooms/:slug' component={RoomDetails} />
        <Route component={Error} />
      </Switch>
      <Footer />

    </div >
  );
}

export default App;
