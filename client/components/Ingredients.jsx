import React, { useState } from 'react';

const Ingredients = ({ ingredients }) => {
  return (
    <>
      <span>Ingredients:</span>
      <ul>
        {ingredients.map((ingredient, i) => {
          return <li>{ingredient}</li>
        })}
      </ul>
    </>
  );
}

export default Ingredients;