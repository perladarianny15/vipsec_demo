import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from "./screens/dashboard/index";

function App() {
  return (

      <BrowserRouter>
        <Switch>
          <Route exact path="/dashboard" render={(props) => <Dashboard {...props} /> } />
        </Switch>
      </BrowserRouter>
  );
}

export default App;