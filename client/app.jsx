import React from 'react';
import ReactDOM from 'react-dom';
import SearchRecipes from './components/SearchRecipes';
import Favorites from './components/Favorites';
import Future from './components/Future';
import Form from 'react-bootstrap/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "sign-in",
      username: "",
      password: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e, screen) {
    this.setState ({
      view: screen
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className='app-container'>
        
        {this.state.view === 'sign-in' ? <>
          <div className='nav'><span className='logo'><text>My Cookbook</text></span></div>
          <div className='sign-in'>
            <label>Username</label>
            <input type='text' name='username' value={this.state.username} onChange={e => {this.handleChange(e)}}/>
            <label>Password</label>
            <input type='password' name='password' value={this.state.password} onChange={e => {this.handleChange(e)}}/>
            <button id='sign-in-button' onClick={e => this.handleClick(e, 'home')}>Sign In</button>
          </div></>
        : <div className='nav'>
          <span className='logo'><text>{this.state.username}'s Cookbook</text></span>
          <span className='nav-bar'>
            <text onClick={e=> this.handleClick(e, 'home')}>Home</text>
            <text onClick={e=> this.handleClick(e, 'favorites')}>Tried and True</text>
            <text onClick={e=> this.handleClick(e, 'future')}>Wishlist</text>
            <text onClick={e=> this.handleClick(e, 'search')}>Explore</text>
            <text onClick={e=> this.handleClick(e, 'groceries')}>Grocery List</text>
          </span></div>}
        {this.state.view === 'home' ? <div><SearchRecipes /><br></br><Favorites /></div> : (this.state.view === 'search' ? <SearchRecipes /> : (this.state.view === 'favorites' ? <Favorites /> : (this.state.view === 'future' ? <Future /> : null)))}
      
      </div>
    );
  }
}
ReactDOM.render(<App/>, document.getElementById('app'));