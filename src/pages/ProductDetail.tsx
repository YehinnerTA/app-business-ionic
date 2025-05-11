import React from 'react';

interface ProductDetailProps {
  image: string;
  title: string;
  price: string;
  description: string;
  brand: string;
  colors?: string[];  // `colors` es opcional y por defecto es un array vacío
}

const ProductDetail: React.FC<ProductDetailProps> = ({ image, title, price, description, brand, colors = [] }) => {
  // Si no hay colores, se muestra un mensaje, si hay, se mapean para mostrarlos
  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <div className="product-image">
          <img src={image} alt={title} className="product-detail-image" />
        </div>
        <div className="product-info">
          <h2 className="product-title">{title}</h2>
          <p className="product-brand">{brand}</p>
          <p className="product-price">{price}</p>
          <p className="product-description">{description}</p>
          <div className="product-colors">
            {colors.length > 0 ? (
              colors.map((color, index) => (
                <span key={index} className="color-circle" style={{ backgroundColor: color }}></span>
              ))
            ) : (
              <p>No colors available</p> // Mensaje si no hay colores
            )}
          </div>
          <div className="product-actions">
            <button className="btn add-to-cart">Agregar al carrito</button>
            <button className="btn add-to-favorites">Añadir a favoritos</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
