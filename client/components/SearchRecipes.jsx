import React from 'react';
import { getRecipes } from '../../api/helpers';
import Form from 'react-bootstrap/Form';
import RecipeModal from './RecipeModal';
import RecipeItem from './RecipeItem';
import axios from 'axios';

class SearchRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      search: '',
      filter: null,
      showModal: false, 
      currentRecipe: null
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  handleSearch(e) {
    this.setState({
      search: e.target.value
    })
  }

  handleClick(e) {
    e.preventDefault();
    axios.get(`/search/${this.state.search}&${this.state.filter}`)
      .then(({ data }) => {
        console.log('coming back to client?', data);
        this.setState({
          recipes: data
        })
      })
      .catch(err => console.error(err));
  }

  handleChange(e) {
    this.setState({
      filter: e.target.value
    })
  }

  toggleModal(e, recipe = null) {
    let tempModal = this.state.showModal;
    if (e !==undefined) {
      this.setState({
        showModal: !tempModal, 
        currentRecipe: recipe
      })
    } else {
    this.setState({
      showModal: !tempModal
    })
  }
  }

  render() {
    return (
      <div className='search-container'>
        <Form>
          <Form.Group controlId="formSearch">
            <Form.Control className='search-bar' type="search" placeholder="Explore New Recipes" value={this.state.search} name='search' onChange={e => this.handleSearch(e)}/>
            <button id='search-button' onClick={e => this.handleClick(e)}>Search</button>
            <br/>
            {['sugar-conscious', 'tree-nut-free', 'alcohol-free', 'peanut-free', 'vegan', 'vegetarian'].map(type => {
              return <span className='dietary-restriction-option'><input type='checkbox'
                id={type}
                name={type}
                value={type}
                onChange={this.handleChange}
              /><label className='dietary-restriction-label'>{type}</label></span>
            })}
          </Form.Group>
        
        </Form>
        <div className='recipe-list-container'>
          {this.state.recipes.length > 0 ?
              this.state.recipes.map((item, i) => {
                return <RecipeItem recipe={item.recipe} onClick={this.toggleModal}/> 
              })
          : null}
        </div>
        {this.state.showModal === true ? <RecipeModal handleClose={this.toggleModal} show={this.state.showModal} recipe={this.state.currentRecipe}/> : null}
      </div>
    );
  }
}

export default SearchRecipes;
