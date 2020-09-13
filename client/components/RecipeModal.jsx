import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Ingredients from './Ingredients';
import axios from 'axios';

class RecipeModal extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, recipe, category) {
    console.log('this is the recipe object', recipe)
    const { dietLabels, healthLabels, image, ingredientLines, label, url} = recipe
    axios.post('/cookbook', {category, dietLabels, healthLabels, image, ingredientLines, label, url})
      .then(result => {
        console.log('completed');
      })
      .catch(err => console.error('ISSUE WITH POST REQ', err));
  };

  render() {
    return (
      <Modal show={this.props.show} onHide={e => this.props.handleClose(e)} centered className='recipe-modal'>
        <Modal.Header closeButton>
          {/* <Modal.Title className='banner-image-container'><img className='banner-image' src={recipe.image} /></Modal.Title> */}
          <Modal.Title>{this.props.recipe.label} Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Ingredients ingredients={this.props.recipe.ingredientLines}/>
          Yields {this.props.recipe.yield} Servings <br/>
          Dietary Restrictions: <ul>{this.props.recipe.healthLabels.map((label, i) => {
            return <li key={i}>{label}</li>
          })}</ul>
          <button><a className='instructions-text' href={this.props.recipe.url} target='blank'>Instructions</a></button>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={(e, recipe) => this.handleClick(e, this.props.recipe, 'favorite')}>
            Favorite Recipe
          </button>
          <button onClick={(e, recipe) => this.handleClick(e, this.props.recipe, 'future')}>
            Add to Wishlist
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default RecipeModal;