import { IonTabBar, IonTabButton, IonIcon } from '@ionic/react';
import {searchOutline,homeOutline, heartOutline, cartOutline } from 'ionicons/icons';
import React from 'react';

const Footer: React.FC = () => (
<IonTabBar slot="bottom">
    <IonTabButton tab="home" href="/inicio">
        <IonIcon icon={homeOutline} />
    </IonTabButton>
    
    <IonTabButton tab="search" href="/seachpage">
        <IonIcon icon={searchOutline}/>
    </IonTabButton>

    <IonTabButton tab="favorites" href="/favorites">
        <IonIcon icon={heartOutline} />
    </IonTabButton>

    <IonTabButton tab="cart" href="/cart">
        <IonIcon icon={cartOutline} />
    </IonTabButton>
</IonTabBar>
);

export default Footer;
