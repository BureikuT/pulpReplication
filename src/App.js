import React from 'react';
import Header from './components/header/Header'
import Contact from './components/contact/Contact'
import Routing from './components/Routing'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div>
      <Router>
      <Header/>
      <Contact/>
      <div className='bottom'>
        <p className='copyright'>©Copyright 2019 PULP LIFESTYLE KITCHEN, LLC.</p>
      </div>
      </Router>
    </div>
  );
}

export default App;
