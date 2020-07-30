import React from 'react';
import axios from 'axios';
import { getRecipes } from '../../api/helpers';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class SearchRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      search: '',
      filters: [],
      showModal: false
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }
  //data.hits = [recipes]
  handleSearch(e) {
    this.setState({
      search: e.target.value
    })
  }

  handleClick(e) {
    e.preventDefault();
    getRecipes(this.state.search, this.state.filters)
      .then((results) => {
        this.setState({
          recipes: results.data.hits
        })
      })
      .catch(err => console.error(err));
  }

  handleChange(e) {
    let temp = this.state.filters;
    if (temp.includes(e.target.value)) {
      temp.splice(temp.indexOf(e.target.value), 1);
    } else {
      temp.push(e.target.value);
    }
    this.setState({
      filters: temp
    }, () => console.log(this.state.filters))
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="formSearch">
            <Form.Control type="search" placeholder="Search Recipes" value={this.state.search} name='search' onChange={e => this.handleSearch(e)}/>
          </Form.Group>
          <Form.Group controlId='diet'>
            <Form.Label>Dietary Restrictions</Form.Label>
            {['balanced', 'high-protein', 'low-fat', 'low-carb', 'sugar-conscious', 'tree-nut-free', 'alcohol-free', 'peanut-free', 'vegan', 'vegetarian'].map(type => {
              return <Form.Check
                custom
                label={type}
                id={type}
                name={type}
                value={type}
                onChange={this.handleChange}
              />
            })}
          </Form.Group>
        
          <Button onClick={e => this.handleClick(e)}>Search</Button>
        </Form>
        <div>
          {this.state.recipes.length > 0 ? 
            <ul>
              {this.state.recipes.map((item, i) => {
                return <li key={i} onClick={this.toggleModal}>
                  <img src={item.recipe.image} width='60px' height='60px'/>
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
