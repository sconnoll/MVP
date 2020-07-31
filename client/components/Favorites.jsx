import React from 'react';
import axios from 'axios';
import RecipeItem from './RecipeItem';
import RecipeModal from './RecipeModal';
import NewRecipeModal from './NewRecipeModal';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      search: '',
      showIngredientModal: false, 
      showNewModal: false,
      currentRecipe: null
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount() {
    axios.get('/cookbook/favorite') 
      .then(({ data }) => {
        this.setState({
          recipes: data
        })
      })
      .catch(err => console.error(err));
  }

  handleSearch(e) {
    this.setState({
      search: e.target.value
    })
  }

  handleClick(e) {
    this.setState({
      showNewModal: !this.state.showNewModal
    })
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
    let tempModal = this.state.showIngredientModal;
    if (e !==undefined) {
      this.setState({
        showIngredientModal: !tempModal, 
        currentRecipe: recipe
      })
    } else {
    this.setState({
      showIngredientModal: !tempModal
    })
  }
  }

  render() {
    return (
      <div className='search-container'>
        <h3>'Tried and True' Recipes</h3>
        <div className='recipe-list-container'>
          {this.state.recipes.length > 0 ? 
              this.state.recipes.map((item, i) => {
                return <RecipeItem recipe={item} onClick={this.toggleModal}/> 
              })
          : <span>You have no favorite recipes</span>}
        </div> 
        {this.state.showIngredientModal === true ? <RecipeModal handleClose={this.toggleModal} show={this.state.showIngredientModal} recipe={this.state.currentRecipe}/> : null}
        {this.state.showNewModal === true ? <NewRecipeModal show={this.state.showNewModal} onClick={this.handleClick}/> : null}
        <br/><div className='footer'><span>Have your own favorite recipe? <button onClick={this.handleClick}>Create Recipe</button></span></div>
      </div>
    );
  }
}

export default Favorites;
