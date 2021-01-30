import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Account from './Pages/Account';
import Navbar from './NavBar/Navbar';
import './App.css';

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/account" component={Account}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
