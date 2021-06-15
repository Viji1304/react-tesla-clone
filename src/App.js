import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { ModelS } from './components/pages/ModelS';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/models" component={ModelS} />               
        </Switch>
        <Footer />            
      </div>      
    </Router>
    
    
  );
}

export default App;
