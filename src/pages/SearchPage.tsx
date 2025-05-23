import React from "react";
import { IonPage, IonContent, IonSearchbar } from "@ionic/react";
import Header from '../components/Header';
import Footer from '../components/Footer';
// import { IonIcon } from '@ionic/react';
import "./SearchPage.css";

const SearchPage: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent className="content">
        {/* Contenedor único para la SearchPage */}
        <section className="search-page-container">
          {/* Imagen de fondo y barra de búsqueda encima */}
          <div className="search-page-header">
            <img src="./assets/products/fondo.png" alt="" />
            <IonSearchbar placeholder="Encontrar productos" className="search-page-search-bar" />
          </div>

          {/* Lista de categorías con imágenes */}
          <div className="search-page-product-list">
            <div className="search-page-product-item">
              <div className="search-page-product-image-container">
                <img src="./assets/products/2.png" alt="Apple" className="search-page-product-image" />
              </div>
              <div className="search-page-product-name">Apple</div>
            </div>
            <div className="search-page-product-item">
              <div className="search-page-product-image-container">
                <img src="./assets/products/2.png" alt="Accesorios" className="search-page-product-image" />
              </div>
              <div className="search-page-product-name">Accesorios</div>
            </div>
            <div className="search-page-product-item">
              <div className="search-page-product-image-container">
                <img src="./assets/products/2.png" alt="Otros" className="search-page-product-image" />
              </div>
              <div className="search-page-product-name">Otros</div>
            </div>
          </div>
        </section>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default SearchPage;
