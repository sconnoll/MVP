import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Ingredients from './Ingredients';

const RecipeModal = ({ recipe, show, handleClose }) => {
  console.log('this is being passed down', recipe);
  return (
    <Modal show={show} onHide={e => handleClose(e)} centered>
      <Modal.Header closeButton>
        <Modal.Title>{recipe.label} Recipe</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Ingredients ingredients={recipe.ingredientLines}/>
        Yields {recipe.yield} Servings
        Dietary Restrictions: <ul>{recipe.healthLabels.map((label, i) => {
          <li key={i}>{label}</li>
        })}</ul>
        <a href={recipe.url}>Instructions</a>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary">
          Close
        </Button>
        <Button variant="primary">
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RecipeModal;