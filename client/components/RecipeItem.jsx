import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

const RecipeItem = ({ recipe, onClick }) => {
  return (
    <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src={recipe.image} />
      <Card.Body>
        <Card.Title className='all-caps'>{recipe.label}</Card.Title>
        <Card.Text>
          Yields {recipe.yield} Servings<br/>
          {recipe.healthLabels ? recipe.healthLabels.map((label, i) => {
            return <><span key={i}>*{label}</span><br/></>
          }) : null}
        </Card.Text>
        <button value={recipe} onClick={(e, value) => onClick(e, recipe)}>Ingredients</button>
        <button><a className='instructions-text' href={recipe.url} target='blank'>View Full Recipe</a></button>
      </Card.Body>
    </Card>
  );
}

export default RecipeItem;