import React from 'react';
import { Link } from 'react-router-dom';

const ToolCard = ({ name, image, url }) => {
  return (
    <Link to={`/${url}`} className="tool-card">
      <div className="tool-image-wrapper">
        <img src={image} alt={name} className="tool-image" />
      </div>
      <h3 className="tool-name">{name}</h3>
    </Link>
  );
};

export default ToolCard;
