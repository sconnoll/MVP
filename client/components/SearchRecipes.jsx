import React from 'react';
import axios from 'axios';
import { getRecipes } from '../../api/helpers';
import Form from 'react-bootstrap/Form';
import RecipeModal from './RecipeModal';
import RecipeItem from './RecipeItem';

class SearchRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      search: '',
      filters: [],
      showModal: false, 
      currentRecipe: null
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
        }, () => console.log(this.state.recipes))
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

  toggleModal(e, recipe = null) {
    let tempModal = this.state.showModal;
    console.log('this should be current recipe', recipe)
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
            <Form.Control id='search-bar' type="search" placeholder="Search Recipes" value={this.state.search} name='search' onChange={e => this.handleSearch(e)}/>
            <button id='search-button' onClick={e => this.handleClick(e)}>Search</button>
            <br/>
            {['balanced', 'high-protein', 'low-fat', 'low-carb', 'sugar-conscious', 'tree-nut-free', 'alcohol-free', 'peanut-free', 'vegan', 'vegetarian'].map(type => {
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
                // <li key={i} value={item.recipe} onClick={(e, recipe) => this.toggleModal(e, item.recipe)}>
                //   <img src={item.recipe.image} width='60px' height='60px'/>
                //   <a>{item.recipe.label}</a>
                // </li>
              })
          : null}
        </div> 
        {this.state.showModal === true ? <RecipeModal handleClose={this.toggleModal} show={this.state.showModal} recipe={this.state.currentRecipe}/> : null}
      </div>
    );
  }
}

export default SearchRecipes;
