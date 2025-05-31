import React, { useState } from 'react';
import Footer from '../components/Footer';
import './Store.css';

const productosIniciales = [
  {
    id: 1,
    nombre: 'iPhone 15 Pro',
    imagen: 'https://cdn1.smartprix.com/rx-i5v8Jk1wT-w1200-h1200/5v8Jk1wT.jpg',
    cantidad: 2,
  },
  {
    id: 2,
    nombre: 'iPhone 14',
    imagen: 'https://cdn1.smartprix.com/rx-i5v8Jk1wT-w1200-h1200/5v8Jk1wT.jpg',
    cantidad: 0,
  },
  {
    id: 3,
    nombre: 'Huawei Mate 50',
    imagen: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-mate50-1.jpg',
    cantidad: 1,
  },
];

const Store: React.FC = () => {
  const [productos, setProductos] = useState(productosIniciales);
  const [busqueda, setBusqueda] = useState('');

  const cambiarCantidad = (id: number, nuevaCantidad: number) => {
    setProductos(productos =>
      productos.map(prod =>
        prod.id === id
          ? { ...prod, cantidad: Math.max(0, Math.min(30, nuevaCantidad)) }
          : prod
      )
    );
  };

  const productosFiltrados = productos.filter(prod =>
    prod.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="store-wrapper">
      {/* Imagen de fondo decorativa */}
      <div className="store-banner"></div>

      {/* Contenido principal */}
      <section className="store-content">
        {/* Encabezado */}
        {/* <header className="store-header">
          <span className="store-titulo">Stock</span>
          <span className="store-user-icon">
            <svg width="22" height="22" fill="currentColor"><circle cx="11" cy="8" r="5"/><ellipse cx="11" cy="17" rx="7" ry="4"/></svg>
          </span>
        </header> */}

        {/* Barra de búsqueda */}
        <div className="store-busqueda">
          <span className="store-busqueda-icon">
            <svg width="18" height="18" fill="currentColor"><circle cx="8" cy="8" r="7" stroke="#888" strokeWidth="2" fill="none"/><line x1="13" y1="13" x2="17" y2="17" stroke="#888" strokeWidth="2" /></svg>
          </span>
          <input
            type="text"
            placeholder="Encontrar productos"
            value={busqueda}
            onChange={e => setBusqueda(e.target.value)}
          />
        </div>

        {/* Lista de productos */}
        <div className="store-productos">
          {productosFiltrados.map(prod => (
            <div className="store-producto" key={prod.id}>
              <img src={prod.imagen} alt={prod.nombre} className="store-producto-img" />
              <div className="store-producto-info">
                <span className="store-producto-nombre">{prod.nombre}</span>
                <div className="store-producto-contador">
                  <span className="store-producto-label">Contidad Disponible</span>
                  <button
                    onClick={() => cambiarCantidad(prod.id, prod.cantidad - 1)}
                    disabled={prod.cantidad <= 0}
                  >-</button>
                  <select
                    className={
                      prod.cantidad === 0
                        ? 'contador-rojo'
                        : prod.cantidad > 0
                        ? 'contador-negro'
                        : ''
                    }
                    value={prod.cantidad}
                    onChange={e => cambiarCantidad(prod.id, Number(e.target.value))}
                  >
                    {Array.from({ length: 31 }, (_, i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                  <button
                    onClick={() => cambiarCantidad(prod.id, prod.cantidad + 1)}
                    disabled={prod.cantidad >= 30}
                  >+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Store;