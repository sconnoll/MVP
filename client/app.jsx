import React from 'react';
import ReactDOM from 'react-dom';
import SearchRecipes from './components/SearchRecipes';
import Favorites from './components/Favorites';
import Future from './components/Future';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, screen) {
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
            <text onClick={e=> this.handleClick(e, 'home')}>Home</text>
            <text onClick={e=> this.handleClick(e, 'favorites')}>Tried and True</text>
            <text onClick={e=> this.handleClick(e, 'future')}>Need to Try</text>
            <text onClick={e=> this.handleClick(e, 'search')}>Explore</text>
            <text onClick={e=> this.handleClick(e, 'groceries')}>Grocery List</text>
          </span>
        </div>
        {this.state.view === 'home' ? <div><SearchRecipes /><br></br><Favorites /></div> : (this.state.view === 'search' ? <SearchRecipes /> : (this.state.view === 'favorites' ? <Favorites /> : <Future />))}
      </div>
    );
  }
}
ReactDOM.render(<App/>, document.getElementById('app'));