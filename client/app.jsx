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
    // getRecipes()
    //   .then((recipes) => console.log(recipes))
    //   .catch((e) => console.log(e));
    return (
      <div>
        <div></div>
        <SearchRecipes />
      </div>
    );
  }
}
ReactDOM.render(<App/>, document.getElementById('app'));