import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import HomeTest from '../components/HomeTest';

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Biencenido</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Bienvenido</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <HomeTest />
            </IonContent>
        </IonPage>
    );
};

export default Home;