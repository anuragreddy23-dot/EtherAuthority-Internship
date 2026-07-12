import React from "react";

function Card({ title, price, category }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p><strong>Price:</strong> {price}</p>
      <p><strong>Category:</strong> {category}</p>
    </div>
  );
}

export default Card;