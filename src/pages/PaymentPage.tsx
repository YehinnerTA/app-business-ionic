import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import PaymentProcess from '../components/PaymentProcess';

const PaymentPage: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen className='PaymentPage-content'>
                <PaymentProcess />
            </IonContent>
        </IonPage>
    );
};

export default PaymentPage;