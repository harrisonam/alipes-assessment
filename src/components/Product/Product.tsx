"use client";
import React, { useState } from "react";

export type ProductProps = {
  imageUrl: string;
  name: string;
  price: number;
  description: string;
};

const Product = ({ imageUrl, name, price, description }: ProductProps) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="flex flex-col items-center mt-10 rounded-md">
      <img src={imageUrl} alt={name} className="w-64 h-64 object-cover" />
      <h3 className="text-2xl font-bold mt-4">{name}</h3>
      <p className="text-xl font-medium text-gray-500 mt-2">${price}</p>
      <p className="text-gray-500 mt-2">{description}</p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4" onClick={() => alert(`Added ${quantity} ${name} to cart`)}>
        Add to Cart
      </button>
      <div className="flex mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-l-lg"
          onClick={() => setQuantity((prev) => prev - 1)}
        >
          -
        </button>
        <p className="px-4 py-2 text-center bg-blue-100 text-blue-500">{quantity}</p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-r-lg"
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Product;
