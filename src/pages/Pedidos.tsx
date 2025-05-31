import React from 'react';
import Footer from '../components/Footer';
import './Pedidos.css';

const pedidos = [
  {
    id: 1,
    imagen: 'https://cdn1.smartprix.com/rx-i5v8Jk1wT-w1200-h1200/5v8Jk1wT.jpg',
    precio: '1,000.00',
    nombre: 'Celular Samsung Galaxy S25 Ultra 5G',
    descripcion: '12GB Bronce',
    estado: 'Completo',
  },
  {
    id: 2,
    imagen: 'https://cdn1.smartprix.com/rx-i5v8Jk1wT-w1200-h1200/5v8Jk1wT.jpg',
    precio: '1,000.00',
    nombre: 'Celular Samsung Galaxy S25 Ultra 5G',
    descripcion: '12GB Bronce',
    estado: 'Incompleto',
  },
  {
    id: 3,
    imagen: 'https://cdn1.smartprix.com/rx-i5v8Jk1wT-w1200-h1200/5v8Jk1wT.jpg',
    precio: '1,000.00',
    nombre: 'Celular Samsung Galaxy S25 Ultra 5G',
    descripcion: '12GB Bronce',
    estado: 'Incompleto',
  },
];

const Pedidos: React.FC = () => {
  return (
    <div className="pedidos-wrapper">
      <div className="pedidos-banner"></div>
      <section className="pedidos-content">
        {/* Header */}
        {/* <header className="pedidos-header">
          <span className="pedidos-titulo">Pedidos</span>
          <span className="pedidos-user-icon">
            <svg width="22" height="22" fill="currentColor"><circle cx="11" cy="8" r="5"/><ellipse cx="11" cy="17" rx="7" ry="4"/></svg>
          </span>
        </header> */}

        {/* Pendientes */}
        <div className="pedidos-pendientes">
          <div className="pendientes-card">
            <div>Pendientes</div>
            <div>Entregados: 2</div>
            <div>En espera: 2</div>
          </div>
        </div>

        {/* Lista de productos */}
        <div className="pedidos-lista">
          {pedidos.map(pedido => (
            <div className="pedido-item" key={pedido.id}>
              <img src={pedido.imagen} alt={pedido.nombre} className="pedido-img" />
              <div className="pedido-info">
                <div className="pedido-precio">S/ {pedido.precio}</div>
                <div className="pedido-nombre">{pedido.nombre}</div>
                <div className="pedido-desc">{pedido.descripcion}</div>
                <div className={`pedido-estado ${pedido.estado === 'Completo' ? 'completo' : 'incompleto'}`}>
                  {pedido.estado}
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

export default Pedidos;