import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import SearchRecipes from './components/SearchRecipes';
import Favorites from './components/Favorites';
import Future from './components/Future';
import {CLIENT_ID} from '../config';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 

const App = (props) => {
  
  useEffect(() => {
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: `${CLIENT_ID}.apps.googleusercontent.com`
      })
      gapi.load('signin2', () => {
        const params = {
          longtitle: true,
          onsuccess: () => {
            console.log('user has finished signing in!');
          }
        }
        gapi.signin2.render('loginDiv', params);
      })
    })
  })

  return (
    <Router>
      <div className='app-container'>
        <div id="loginDiv" className="g-signin2">Sign in</div>
        <nav>
          <span className='logo'><text>My Cookbook</text></span>
          <ul className='nav-bar'>
            <li>
              <Link style={{textDecoration: 'none', color: 'white'}} to="/">Home</Link>
            </li>
            <li>
              <Link to="/tried_and_true">Tried and True</Link>
            </li>
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link to="/explore">Explore</Link>
            </li>
            <li>
              <Link to="/groceries">Grocery List</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/tried_and_true">
            <Favorites />
          </Route>
          <Route path="/wishlist">
            <Future />
          </Route>
          <Route path="/explore">
            <SearchRecipes />
          </Route>
          <Route path="/groceries">
            {null}
          </Route>
          <Route path="/">
            <div>
              <SearchRecipes /><br/>
              <Favorites />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(<App/>, document.getElementById('app'));