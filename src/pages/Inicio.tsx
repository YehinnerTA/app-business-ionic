import { IonContent, IonPage, IonSearchbar, IonButton } from '@ionic/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import React, { useState } from 'react';
import './Inicio.css';

const Inicio: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");

  const soloParaTi = [
    { image: '/assets/products/2.png', title: 'Samsung S23 5G 128GB', price: 'S/ 1,000.00' },
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

  const handleSearchChange = (e: any) => {
    setSearchText(e.target.value); // Actualiza el estado con el valor ingresado
  };

  const handleSearch = () => {
    alert(`Buscando: ${searchText}`);
    // Aquí puedes agregar la lógica de búsqueda real para filtrar productos
  };

  return (
    <IonPage>
      <Header />
      <IonContent>
        <div className="container">
          {/* Barra de búsqueda */}
          <IonSearchbar
            value={searchText}
            onIonInput={handleSearchChange} // Cambié onIonSearch a onIonInput
            debounce={500}  // Ajusta la velocidad de la búsqueda
            showClearButton="focus"  // Muestra el botón de limpiar cuando el input tiene texto
            placeholder="Search" // Texto dentro del input
            style={{ marginBottom: '24px' }}  // Estilo para ajustar el tamaño
          />

          <div className='image-principal'>
            <img src="/assets/products/fondo.png" alt="iphones" />
            <h1 className='title-principal'>LOS MEJORES PRECIOS</h1>
          </div>
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
