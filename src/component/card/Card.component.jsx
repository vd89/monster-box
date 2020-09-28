import React from 'react';
import './card.style.css';

export const Card = ({ monster }) => {
  return (
    <div className='card-container'>
      <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt='' />
      <h3>{monster.name} </h3>
      <p>{monster.email}</p>
    </div>
  );
};
