import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/rooms/' component={Rooms}/>
        <Route exact path='/rooms/:slug' component={SingleRoom}/>
        <Route component={Error}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
