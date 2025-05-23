import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonGrid, IonRow, IonCol, IonImg, IonText, IonCard, IonCardContent, IonIcon } from '@ionic/react';
import { homeOutline, searchOutline, heart, cartOutline, personOutline } from 'ionicons/icons';
import './Productos.css';

// INTERFAZ para producto
interface Producto {
  id: number;
  nombre: string;
  precio: number;
  marca: string;
  imagen: string;
}

// Props del componente reutilizable ProductCard
interface ProductCardProps {
  producto?: Producto;
  image?: string;
  title?: string;
  price?: string;
}

// COMPONENTE REUTILIZABLE
const ProductCard: React.FC<ProductCardProps> = ({ producto, image, title, price }) => {
  const img = producto?.imagen || image || '';
  const nombre = producto?.nombre || title || 'Producto sin nombre';
  const precio = producto?.precio
    ? `S/. ${producto.precio.toFixed(2)}`
    : price || 'Precio no disponible';
  const marca = producto?.marca || '';

  return (
    <IonCard className="product-card">
      <IonGrid>
        <IonRow>
          <IonCol size="12" className="ion-text-center">
            <IonImg
              src={img}
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonCardContent>
              <IonText color="dark">
                <p
                  style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    padding: '2px 4px',
                    textAlign: 'center',
                    backgroundColor: '#f0f0f0',
                  }}
                >
                  {precio}
                </p>
              </IonText>
              <IonText>
                <h2
                  style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    margin: '4px 0',
                    textAlign: 'center',
                  }}
                >
                  {nombre}
                </h2>
                <p
                  style={{
                    fontSize: '12px',
                    color: '#666',
                    textAlign: 'center'
                  }}
                >
                  {marca}
                </p>
              </IonText>
            </IonCardContent>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

// COMPONENTE PRINCIPAL
const Productos: React.FC = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Carga de datos
  useEffect(() => {
    const data: Producto[] = [
      {
        id: 1,
        nombre: "Apple iPhone 14 Plus",
        precio: 1000,
        marca: "Apple",
        imagen: "../assets/products/1.svg"
      },
      {
        id: 2,
        nombre: "Samsung Galaxy S23 Plus",
        precio: 1000,
        marca: "Samsung",
        imagen: "../assets/products/2.svg"
      },
      {
        id: 3,
        nombre: "Samsung S21 Plus",
        precio: 1000,
        marca: "Samsung",
        imagen: "../assets/products/3.svg"
      },
      {
        id: 4,
        nombre: "Samsung S24 Plus",
        precio: 1000,
        marca: "Samsung",
        imagen: "../assets/products/4.svg"
      },
      {
        id: 5,
        nombre: "Samsung ZFlip",
        precio: 1000,
        marca: "Samsung",
        imagen: "../assets/products/5.svg"
      },
      {
        id: 6,
        nombre: "iPhone 16 Pro Max",
        precio: 1000,
        marca: "Apple",
        imagen: "../assets/products/1.svg"
      }
    ];
    setProductos(data);
  }, []);

  return (
    <IonPage>
      {/* CABECERA */}
      <IonHeader translucent>
        <IonToolbar color="light">
          <IonTitle>Tienda</IonTitle>
          <IonIcon icon={personOutline} slot="end" className="ion-padding-end" />
        </IonToolbar>
      </IonHeader>

      {/* CUERPO */}
      <IonContent fullscreen color="light">
        {/* Barra de búsqueda */}
        <IonCard className="buscar-card">
          <IonCardContent
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px 16px'
            }}
          >
            <IonText>Buscar productos</IonText>
            <IonIcon icon={searchOutline} />
          </IonCardContent>
        </IonCard>

        {/* Lista de productos */}
        <IonGrid>
          <IonRow>
            {productos
              .filter(producto =>
                producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((producto) => (
                <IonCol size="6" sizeMd="4" sizeLg="3" key={producto.id}>
                  <ProductCard producto={producto} />
                </IonCol>
              ))}
          </IonRow>
        </IonGrid>
      </IonContent>

      {/* MENÚ INFERIOR */}
      <IonFooter>
        <IonToolbar>
          <IonGrid>
            <IonRow className="ion-justify-content-around ion-align-items-center">
              <IonIcon icon={homeOutline} />
              <IonIcon icon={searchOutline} />
              <IonIcon icon={heart} color="danger" />
              <IonIcon icon={cartOutline} />
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Productos;
