import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Gamer from './components/gamer';
import User from './components/username';

// let headers = {
//   "Accept": "application/json",
//   "app_id": "0296bd0a",
//   "app_key": "5a0766a941eb5287bafeab007dc348c8"
// }

// type word then when space is pushed is added to array
// then arrayInput is compared with definitionArray
class App extends Component {
  render(){
    return(
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/gamer' component={Gamer}/>
        <Route exact path='/username' component={User}/>
      </Switch>
    )
  }
}

export default App;
