import { Fragment } from 'react';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Question1 from './pages/Question1';

function App() {
 
  return (
    <Fragment>     
      <BrowserRouter>
                <Switch>
 
                  <Route exact path="/" >
                    <Home />
                  </Route>      
 
                  <Route path="/Question1">
                    <Question1 />
                  </Route>                    

                </Switch>
      </BrowserRouter>         
   </Fragment>
  );
}

export default App;