import React, { useRef, useState } from 'react';
import Footer from '../components/Footer';
import './Agregacion.css';

const Agregacion: React.FC = () => {
  const [imagen, setImagen] = useState<string | null>(null);
  const [modelo, setModelo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleImagenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setImagen(ev.target?.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubirClick = () => {
    inputRef.current?.click();
  };

  const handleAgregar = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Modelo: ${modelo}\nDescripción: ${descripcion}`);
  };

  return (
    <div className="agregacion-wrapper">
      <div className="agregacion-banner"></div>
      <section className="agregacion-content">
        {/* <header className="agregacion-header">
          <span className="agregacion-titulo">Agregación</span>
          <span className="agregacion-user-icon">
            <img src="/assets/products/user.svg" alt="Usuario" style={{ width: 24, height: 24 }} />
          </span>
        </header> */}
        <form className="agregacion-form" onSubmit={handleAgregar}>
          <div className="agregacion-imagen-container">
            <div className="agregacion-imagen-preview">
              {imagen ? (
                <img src={imagen} alt="Preview" className="agregacion-imagen" />
              ) : (
                <img src="/assets/products/camera.svg" alt="Subir" className="agregacion-imagen-icono" />
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              ref={inputRef}
              style={{ display: 'none' }}
              onChange={handleImagenChange}
            />
            <button type="button" className="agregacion-btn-subir" onClick={handleSubirClick}>
              Subir imagen
            </button>
          </div>
          <label className="agregacion-label">
            Modelo:
            <textarea
              className="agregacion-input"
              value={modelo}
              onChange={e => setModelo(e.target.value)}
              rows={2}
            />
          </label>
          <label className="agregacion-label">
            Descripcion:
            <textarea
              className="agregacion-input"
              value={descripcion}
              onChange={e => setDescripcion(e.target.value)}
              rows={2}
            />
          </label>
          <button type="submit" className="agregacion-btn-agregar">
            Agregar
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Agregacion;