// MenuCard.js
import React from 'react';
import './Card.css';


const Card = ({ image, title, description, price }) => {
  return (
    <div className="menu-card">
      <img src={image} alt={title} className="menu-card-image" />
      <div className="menu-card-content">
        <h3 className="menu-card-title">{title}</h3>
        <p className="menu-card-description">{description}</p>
        <p className="menu-card-price">{price}</p>
      </div>
    </div>
  );
};

export default Card;
