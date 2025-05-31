import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonFooter, IonGrid, IonRow, IonCol, IonImg, IonText, IonCard, IonCardContent } from '@ionic/react';
import { homeOutline, searchOutline, heart, cartOutline, personOutline } from 'ionicons/icons';
import './Tienda.css';
// import headerImage from '../assets/img/header.jpg';
// import productImage from '../assets/img/imagen.png';

const Tienda: React.FC = () => {
  return (
    <IonPage>
      {/*CABECERA*/}
      <IonHeader translucent>
        <IonToolbar color="light">
          <IonTitle>Tienda</IonTitle>
          <IonIcon icon={personOutline} slot="end" className="ion-padding-end" />
        </IonToolbar>
      </IonHeader>



      {/*CUERPO*/}
      <IonContent fullscreen color="light" >
        <div
          style={{
            backgroundImage: `url("../assets/icon/hd.svg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            paddingTop: '16px',
            paddingBottom: '32px'

          }}>

        </div>
        {/* Barra de búsqueda */}
        <IonCard className="buscar-card" color="transparent">
          <IonCardContent className="encontrar-card-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white', padding: '10px 12px', margin: '0 0px' }}>
            <IonIcon icon={searchOutline} color="dark" style={{ fontSize: '20px' }} />
            <IonText className="pagar-text" style={{ fontSize: '15', color: 'gray', alignItems: 'right' }}>Encontrar productos</IonText>
          </IonCardContent>
        </IonCard>




        {/*Producto en la lista*/}
        <IonCard className="wishlist-card" color="light">
          <IonGrid>
            <IonRow>
              <IonCol size="8">
                <IonImg src={"../assets/icon/2.svg"} />
              </IonCol>
              <IonCol size="8">
                <IonCardContent style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <IonText color="dark">
                    <p style={{ fontSize: '12px', fontWeight: 'bold', border: '1px solid white', display: 'inline-block', padding: '1px 2px' }}>
                      S/. 1,000.00
                    </p>
                  </IonText>
                </IonCardContent>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>


        <IonCard className="wishlist-card" color="light">
          <IonGrid>
            <IonRow>
              <IonCol size="4">
                <IonImg src={"../assets/icon/2.svg"} />
              </IonCol>
              <IonCol size="8">
                <IonCardContent style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <IonText color="dark">
                    <p style={{ fontSize: '12px', fontWeight: 'bold', border: '1px solid white', display: 'inline-block', padding: '1px 2px' }}>
                      S/. 1,000.00
                    </p>
                  </IonText>
                  <IonText>
                    <h2 style={{ fontSize: '14px', fontWeight: 'bold', margin: '4px 0' }}>
                      Celular Samsung Galaxy S25 Ultra 5G 12GB Bronce
                    </h2>
                    <p style={{ fontSize: '12px', color: '#666' }}>Samsung</p>
                  </IonText>
                </IonCardContent>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>

      </IonContent>

      {/*MANÚ INFERIOR*/}
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

export default Tienda;