import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const RecipeModal = ({ recipe, show, handleClose }) => {

  return (
    <Modal show={show} onHide={e => handleClose(e)} centered>
      <Modal.Header closeButton>
        <Modal.Title>{recipe.label} Recipe</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Ingredients ingredients={recipe.ingredients}/>
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