import React from 'react';
import HomePage from './Components/HomePage/HomePage.js';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

export default class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}