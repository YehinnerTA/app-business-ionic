import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon } from '@ionic/react';
import { personOutline } from 'ionicons/icons';
import React from 'react';


const Header: React.FC = () => (
  <IonHeader>
    <IonToolbar className="flex justify-between px-4">
      <IonTitle className="text-xl font-bold">IVANPHONE SHOP</IonTitle>
      <IonButtons slot="end">
        <IonButton><IonIcon icon={personOutline} /></IonButton>
      </IonButtons>
    </IonToolbar>
  </IonHeader>
);

export default Header;