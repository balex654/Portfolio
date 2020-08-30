import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage.js';
import ComS227 from './ClassComponents/ComS227/ComS227.js';
import CPRE185 from './ClassComponents/CPRE185/CPRE185.js';
import ComS228 from './ClassComponents/ComS228/ComS228.js';
import CPRE288 from './ClassComponents/CPRE288/CPRE288.js';
import ComS311 from './ClassComponents/ComS311/ComS311.js';
import CPRE381 from './ClassComponents/CPRE381/CPRE381.js';

export default class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/Home">
            <HomePage/>
          </Route>

          <Route path="/ComS227" render={(props) => <ComS227 {...props}/>}/>

          <Route path="/CPRE185" render={(props) => <CPRE185 {...props}/>}/>

          <Route path="/ComS228" render={(props) => <ComS228 {...props}/>}/>

          <Route path="/CPRE288" render={(props) => <CPRE288 {...props}/>}/>

          <Route path="/ComS311" render={(props) => <ComS311 {...props}/>}/>

          <Route path="/CPRE381" render={(props) => <CPRE381 {...props}/>}/>

        </Switch>
      </BrowserRouter>
    );
  }
}