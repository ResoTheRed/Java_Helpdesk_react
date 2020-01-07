import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/navbar/Navbar';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Mentor from './components/mentor/Mentor';
import Admin from './components/admin/Admin';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/mentor" component={Mentor} />
          <Route path="/admin" component={Admin} />

        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
