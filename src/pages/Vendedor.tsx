import { IonPage, IonContent } from '@ionic/react';
import React from 'react';
import Header from '../components/Header'; // Conservado si decides activarlo luego
import Footer from '../components/Footer';
import './Vendedor.css';

const categorias = [
  {
    nombre: 'Apple',
    imagen: '/assets/products/1.png',
  },
  {
    nombre: 'Accesorios',
    imagen: '/assets/products/1.png',
  },
  {
    nombre: 'Otros',
    imagen: '/assets/products/1.png',
  },
];

const Vendedor: React.FC = () => {
  const usuario = 'Usuario';

  return (
    <IonPage>
      <IonContent>
        <section className="vendedor-wrapper">
          <div className="vendedor-banner"></div>
          {/* 🧑‍💼 Encabezado con saludo y avatar */}
          {/* <header className="vendedor-header">
  <h1 className="vendedor-titulo">
    Hola, <span className="vendedor-usuario">({usuario})</span>
  </h1>
  <img src="" alt="" className="vendedor-icono-usuario" />
</header> */}

          {/* 🔍 Barra de búsqueda */}
          <div className="vendedor-busqueda">
  <img src="" alt="" className="vendedor-icono-usuario" />
  <input
    type="text"
    placeholder="Encontrar productos"
    className="vendedor-input-busqueda"
  />
</div>

          {/* 📂 Listado de categorías */}
          <section className="vendedor-categorias">
  {categorias.map((cat) => (
    <div key={cat.nombre} className="vendedor-categoria">
      <img src={cat.imagen} alt={`Categoría ${cat.nombre}`} className="categoria-imagen" />
      <span className="categoria-nombre">{cat.nombre}</span>
      <img src="/assets/products/1.png" alt="Usuario" className="vendedor-icono-usuario" />
    </div>
  ))}
</section>
        </section>
      </IonContent>

      {/* ⛳ Footer fijo */}
      <Footer />
    </IonPage>
  );
};

export default Vendedor;
