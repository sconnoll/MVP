import React from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import RecipeItem from './RecipeItem';
import RecipeModal from './RecipeModal';

class Favorites extends React.Component {
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
        <h3>'Tried and True' Recipes</h3>
        {/* <Form>
          <Form.Group controlId="formSearch">
            <Form.Control className='search-bar' type="search" placeholder="Search Recipes" value={this.state.search} name='search' onChange={e => this.handleSearch(e)}/>
            <button id='search-button' onClick={e => this.handleClick(e)}>Search</button>
            <br/>
          </Form.Group>
        </Form> */}
        <div className='recipe-list-container'>
          {this.state.recipes.length > 0 ? 
              this.state.recipes.map((item, i) => {
                return <RecipeItem recipe={item} onClick={this.toggleModal}/> 
              })
          : <span>You have no favorite recipes</span>}
        </div> 
        {this.state.showModal === true ? <RecipeModal handleClose={this.toggleModal} show={this.state.showModal} recipe={this.state.currentRecipe}/> : null}
        <br/><div className='footer'><span>Have your own favorite recipe? <button>Create Recipe</button></span></div>
      </div>
    );
  }
}

export default Favorites;
