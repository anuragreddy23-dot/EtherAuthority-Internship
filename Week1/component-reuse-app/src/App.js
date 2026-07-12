import React from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const products = [
    {
      id: 1,
      title: "Laptop",
      price: "₹60,000",
      category: "Electronics",
    },
    {
      id: 2,
      title: "Mobile",
      price: "₹25,000",
      category: "Electronics",
    },
    {
      id: 3,
      title: "Headphones",
      price: "₹2,500",
      category: "Accessories",
    },
    {
      id: 4,
      title: "Smart Watch",
      price: "₹5,000",
      category: "Wearables",
    },
  ];

  return (
    <div className="container">
      <h1>Component Reuse Example</h1>

      {products.map((product) => (
        <Card
          key={product.id}
          title={product.title}
          price={product.price}
          category={product.category}
        />
      ))}
    </div>
  );
}

export default App;