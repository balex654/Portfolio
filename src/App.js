import React from 'react';
import HomePage from './Components/HomePage/HomePage.js';
import ComS227 from './ClassComponents/ComS227/ComS227.js'
import {Switch, Route, BrowserRouter} from 'react-router-dom';

export default class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/Home">
            <HomePage/>
          </Route>

          <Route path="/ComS227">
            <ComS227/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}