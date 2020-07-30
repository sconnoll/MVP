import React from 'react';
import ReactDOM from 'react-dom';
import SearchRecipes from './components/SearchRecipes';
import Favorites from './components/Favorites';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, screen) {
    console.log('clicked, view', screen);
    this.setState ({
      view: screen
    })
  }

  render() {
    return (
      <div className='app-container'>
        <div className='nav'>
          <span className='logo'><text>My Cookbook</text></span>
          <span className='nav-bar'>
            <Router>
            <Link to={'/home'}><text onClick={e=> this.handleClick(e, 'home')}>Home</text></Link>
            <Link to={'/favorites'}><text onClick={e=> this.handleClick(e, 'favorites')}>Favorites</text></Link>
            <Link to={'/search'}><text onClick={e=> this.handleClick(e, 'search')}>Search</text></Link>
            </Router>
          </span>
        </div>
        <div>
          <Route path={'home' || 'search'} component={<SearchRecipes />}/>
          <Route path={'favorites'} component={<Favorites />}/>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App/>, document.getElementById('app'));