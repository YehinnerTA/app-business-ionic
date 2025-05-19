import React from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  discount?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price, discount }) => (
  <Link to={`/product/${title}`} className="product-card">
    <div className="product-image-container">
      <img src={image} alt={title} className="product-image" />
      {discount && (
        <div className="product-discount">{discount}</div>
      )}
    </div>
    <div className="product-details">
         <p className="product-title">{title}</p>
            <p className="product-price">{price}</p>
   

    </div>
  </Link>
);

export default ProductCard;