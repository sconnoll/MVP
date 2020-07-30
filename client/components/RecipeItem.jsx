import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

const RecipeItem = ({ recipe, onClick }) => {
  return (
    
    <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src={recipe.image} />
      <Card.Body>
        <Card.Title>{recipe.label}</Card.Title>
        <Card.Text>
          Recipe serves {recipe.yield}
        </Card.Text>
        <button value={recipe} onClick={(e, value) => onClick(e, recipe)}>Ingredients</button>
      </Card.Body>
    </Card>
  );
}

export default RecipeItem;