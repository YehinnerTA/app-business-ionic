import React, { useState } from 'react';
import { IonPage, IonContent, IonButton } from '@ionic/react';
import './ProductDetail.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductDetail: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>('black');
  
  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <IonPage>
            <Header />

      <IonContent className="product-detail-content">
        <div className="product-detail-container">
          {/* Imagen del producto */}
          <div className="product-image">
            <img src="/assets/products/2.png" alt="Apple iPhone 14 Plus" />
          </div>

          {/* Información del producto */}
          <div className="product-info">
            <h2 className="product-title">Apple iPhone 14 Plus eSIM 128GB 6GB 6.7&quot; Purpura</h2>
            <p className="product-brand">Apple</p>
            <p className="product-price">S/ 1,000.00</p>

            {/* Colores disponibles */}
            <div className="color-options">
              <span>Colores:</span>
              <button
                className={`color-option ${selectedColor === 'black' ? 'selected' : ''}`}
                style={{ backgroundColor: 'black' }}
                onClick={() => handleColorChange('black')}
              />
              <button
                className={`color-option ${selectedColor === 'green' ? 'selected' : ''}`}
                style={{ backgroundColor: 'green' }}
                onClick={() => handleColorChange('green')}
              />
              <button
                className={`color-option ${selectedColor === 'purple' ? 'selected' : ''}`}
                style={{ backgroundColor: 'purple' }}
                onClick={() => handleColorChange('purple')}
              />
            </div>

            {/* Botones */}
            <div className="action-buttons">
              <IonButton expand="full" color="primary" className="add-to-cart-btn">
                Agregar al carrito
              </IonButton>
              <IonButton expand="full" className="add-to-favorites-btn">
                Añadir a favoritos
              </IonButton>
            </div>
          </div>
        </div>
      </IonContent>
        <Footer />
    </IonPage>
  );
};

export default ProductDetail;
