import React from 'react';
import ReactDOM from 'react-dom';
import SearchRecipes from './components/SearchRecipes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home",
    };
  }

  render() {
    return (
      <div className='app-container'>
        <div className='nav'>
          <span className='nav-bar'>
            <a href='home'><text>Home</text></a>
            <a href='favorites'><text>Favorites</text></a>

          </span>
        </div>
        <SearchRecipes />
      </div>
    );
  }
}
ReactDOM.render(<App/>, document.getElementById('app'));