import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Ingredients from './Ingredients';

const RecipeModal = ({ recipe, show, handleClose }) => {
  console.log('this is being passed down', recipe);
  return (
    <Modal show={show} onHide={e => handleClose(e)} centered className='recipe-modal'>
      <Modal.Header closeButton>
        {/* <Modal.Title className='banner-image-container'><img className='banner-image' src={recipe.image} /></Modal.Title> */}
        <Modal.Title>{recipe.label} Recipe</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Ingredients ingredients={recipe.ingredientLines}/>
        Yields {recipe.yield} Servings <br/>
        Dietary Restrictions: <ul>{recipe.healthLabels.map((label, i) => {
          return <li key={i}>{label}</li>
        })}</ul>
        <a href={recipe.url}>Instructions</a>
      </Modal.Body>
      <Modal.Footer>
        <button variant="secondary">
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default RecipeModal;