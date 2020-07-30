import React from 'react';
import axios from 'axios';
import { getRecipes } from '../../api/helpers';

class SearchRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      search: ''
    }
    this.handleSearch = this.handleSearch.bind(this);
  }
  //data.hits = [recipes]
  handleSearch(e) {
    this.setState({
      search: e.target.value
    })
  }

  handleClick(e) {
    e.preventDefault();
    getRecipes(this.state.search)
      .then((results) => {
        this.setState({
          recipes: results.data.hits
        })
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <form>
          <input type='search' value={this.state.search} name='search' onChange={e => this.handleSearch(e)}/>
          <button onClick={e => this.handleClick(e)}/>
        </form>
        <div>
          {this.state.recipes.length > 0 ? 
            <ul>
              {this.state.recipes.map((item, i) => {
                return <li key={i}>
                  <img src={item.recipe.image} />
                  <a>{item.recipe.label}</a>
                </li>
              })}
            </ul>
          : null}
        </div> 
      </div>
    );
  }
}

export default SearchRecipes;