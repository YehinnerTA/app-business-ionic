import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonFooter, IonGrid, IonRow, IonCol, IonImg, IonText, IonCard, IonCardContent } from '@ionic/react';
import { homeOutline, searchOutline, heart, cartOutline, personOutline, chevronForwardOutline } from 'ionicons/icons';
import './Carrito.css';

const Carrito: React.FC = () => {
  return (
    <IonPage>
      {/*CABECERA*/}
      <IonHeader translucent>
        <IonToolbar color="light">
          <IonTitle>Carrito de compras</IonTitle>
          <IonIcon icon={personOutline} slot="end" className="ion-padding-end" />
        </IonToolbar>
      </IonHeader>

      {/*CUERPO*/}
      <IonContent fullscreen color="light" >
        <div className="wishlist-header">
          <IonText className="wishlist-count">1 Artículo</IonText>
        </div>

        {/*Producto en la lista*/}
        <IonCard className="wishlist-card">
          <IonGrid>
            <IonRow>
              <IonCol size="4">
                <IonImg src={"../assets/icon/1.svg"} />
              </IonCol>
              <IonCol size="8">
                <IonCardContent>
                  <IonText color="dark">
                    <p style={{ fontSize: '12px', fontWeight: 'bold', border: '1px solid black', display: 'inline-block', padding: '2px 4px' }}>
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

      {/*TOTAL*/}
      <IonCard className="total-card">
        <IonCardContent className="total-card-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <IonText className="total-text" style={{ fontSize: '14px', color: 'black' }}>Total</IonText>
          <IonText className="total-subtext" style={{ fontSize: '14px', color: 'gray' }}> (Incluye el IVA)</IonText>
          <IonText className="total-amount" style={{ fontSize: '14px', color: 'black' }}>S/. 1,000.00</IonText>
        </IonCardContent>
      </IonCard>
      {/*PAGAR*/}
      <IonCard className="pagar-card">
        <IonCardContent className="pagar-card-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white', padding: '12px 16px' }}>
          <IonText className="pagar-text" style={{ fontSize: '14px', color: 'white' }}>Pagar</IonText>
          <IonIcon icon={chevronForwardOutline} color="light" style={{ fontSize: '20px' }} />
        </IonCardContent>
      </IonCard>

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

export default Carrito;