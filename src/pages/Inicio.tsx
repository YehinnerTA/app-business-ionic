import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import React from 'react';
import './Inicio.css';

const Inicio: React.FC = () => {
  const soloParaTi = [
    { image: '/assets/products/1.png', title: 'Samsung S23 5G 128GB', price: 'S/ 1,000.00' },
    { image: '/assets/products/2.png', title: 'iPhone 13 Pro Max 256GB', price: 'S/ 1,000.00' },
    { image: '/assets/products/2.png', title: 'iPhone 13 Pro Max 256GB', price: 'S/ 1,000.00' },
    { image: '/assets/products/2.png', title: 'iPhone 13 Pro Max 256GB', price: 'S/ 1,000.00' },
    { image: '/assets/products/2.png', title: 'iPhone 13 Pro Max 256GB', price: 'S/ 1,000.00' },
  ];

  const nuevosLanzamientos = [
    { image: '/assets/products/3.png', title: 'Galaxy S23 Ultra 512GB', price: 'S/ 1,000.00' },
    { image: '/assets/products/3.png', title: 'Galaxy S23 Ultra 512GB', price: 'S/ 1,000.00' },
    { image: '/assets/products/3.png', title: 'Galaxy S23 Ultra 512GB', price: 'S/ 1,000.00' },
    { image: '/assets/products/3.png', title: 'Galaxy S23 Ultra 512GB', price: 'S/ 1,000.00' },
    { image: '/assets/products/3.png', title: 'Galaxy S23 Ultra 512GB', price: 'S/ 1,000.00' },
  ];

  const mejoresDescuentos = [
    { image: '/assets/products/4.png', title: 'iPhone 12', price: 'S/ 1,000.00' },
    { image: '/assets/products/4.png', title: 'iPhone 12', price: 'S/ 1,000.00' },
    { image: '/assets/products/4.png', title: 'iPhone 12', price: 'S/ 1,000.00' },
    { image: '/assets/products/4.png', title: 'iPhone 12', price: 'S/ 1,000.00' },
    { image: '/assets/products/4.png', title: 'iPhone 12', price: 'S/ 1,000.00' },
  ];

  return (
    <IonPage>
      <Header />
      <IonContent>
        <div className="container">
          <h2 className="section-title">Solo para ti</h2>
          <div className="product-grid">
            {soloParaTi.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>

          <h2 className="section-title">Nuevos Lanzamientos</h2>
          <div className="product-grid">
            {nuevosLanzamientos.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>

          <h2 className="section-title">Mejores Descuentos</h2>
          <div className="product-grid">
            {mejoresDescuentos.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
        </div>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Inicio;
