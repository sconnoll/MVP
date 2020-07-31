import React from 'react';
import axios from 'axios';
import RecipeItem from './RecipeItem';
import RecipeModal from './RecipeModal';

class Future extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      search: '',
      showModal: false, 
      currentRecipe: null
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }
  
  componentDidMount() {
    axios.get('/cookbook/future') 
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
        <h3>'Need to Try' Recipes</h3>
        <div className='recipe-list-container'>
          {this.state.recipes.length > 0 ? 
              this.state.recipes.map((item, i) => {
                return <RecipeItem recipe={item} onClick={this.toggleModal}/> 
              })
          : <span>Explore delicious recipes!</span>}
        </div> 
        {this.state.showModal === true ? <RecipeModal handleClose={this.toggleModal} show={this.state.showModal} recipe={this.state.currentRecipe}/> : null}
      </div>
    );
  }
}

export default Future;
