import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

class NewRecipeModal extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      dietLabels: [],
      healthLabels: [],
      image: '',
      ingredientLines: [],
      label: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick(e, recipe, category) {
    console.log(recipe);
  };

  render() {
    return (
      <Modal show={this.props.show} onHide={e => this.props.onClick(e)} centered className='recipe-modal'>
        <Modal.Header closeButton>
          {this.state.label}
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formRecipe">
              <Form.Label>Recipe Title</Form.Label>
              <Form.Control type="text" value={this.state.label} name='label' onChange={e => this.handleChange(e)}/>
              <Form.Group controlId='formIngredients'>
                <Form.Label>Ingredients</Form.Label>
                <Form.Control as="textarea" value={this.state.ingredientLines} name='ingredientLines' onChange={e => this.handleChange(e)}/>
              </Form.Group>
              <Form.Group controlId='formInstructions'>
                <Form.Label>Instructions</Form.Label>
                <Form.Control as="textarea" value={this.state.url} name='url' onChange={e => this.handleChange(e)}/>
              </Form.Group>
              <Form.Label>Dietary Restrictions</Form.Label>
              <Form.Control type="text" value={this.state.healthLabels} name='healthLabels' onChange={e => this.handleChange(e)}/>
              <Form.File label='Upload a picture of the dish' value={this.state.image} name='image' onChange={e => this.handleChange(e)}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={(e) => this.handleClick(e, this.state, 'favorite')}>
            Save Recipe
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default NewRecipeModal;