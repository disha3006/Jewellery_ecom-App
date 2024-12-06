import React from 'react';
import './ProductCard.css'; 

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <div>
                <span>₹{product.price}</span>
                <button>+</button>
            </div>
        </div>
    );
}

export default ProductCard;
