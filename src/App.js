import React, { Component } from 'react';
import './App.css';
import Index from './components/Index';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import {BrowserRouter , Route} from 'react-router-dom'

class App extends Component {
 render (){
  return (
    <div className="App">
      
    <BrowserRouter>
    <Navbar/>
    <Route exact path="/" component={Index}/>
    <Route path="/contact" component={Contact}/>
    </BrowserRouter>

    </div>
  );
 }
}

export default App;
