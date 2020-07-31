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
      label: 'New Recipe'
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
          Recipe Form goes here
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