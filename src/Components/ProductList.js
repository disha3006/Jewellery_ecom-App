import React from 'react';
import ProductCard from './ProductCard';
import img1 from "../images/coverpage.jpeg"
import img2 from "../images/blue e.jpg"

const ProductList = () => {
    const products = [
        { id: 1, name: "Product Name 1", price: 299, image: img1 },
        { id: 2, name: "Product Name 2", price: 299, image: img1 },
        { id: 3, name: "Product Name 3", price: 299, image: img1 },
        { id: 4, name: "Product Name 4", price: 299, image: img1 },
        { id: 5, name: "Product Name 5", price: 299, image: img1 },
        { id: 6, name: "Product Name 6", price: 299, image: img1 },
        { id: 7, name: "Product Name 7", price: 299, image: img1 },
        { id: 8, name: "Product Name 8", price: 299, image: img1 },
        { id: 9, name: "Product Name 9", price: 299, image: img1 }
    ];

    return (
        <div className="cards-pg">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductList;
