import React from 'react';

const Product = ({ rating, title, price }) => {
  return (
    <li>
      <h1>Title: {title}</h1>
      <h2>Price: ${price}</h2>
      <h3>Rating: {rating}</h3>
    </li>
  );
};
export default Product;
