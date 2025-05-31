import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import SplashScreen from '../components/SplashScreen';

const SplashPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <SplashScreen />
      </IonContent>
    </IonPage>
  );
};

export default SplashPage;