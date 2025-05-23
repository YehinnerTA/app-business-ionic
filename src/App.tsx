import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
// Conexión de archivos intermediario
import SplashLoader from './pages/SplashLoader';

// Ubicación de vistas
import SplashPage from './pages/SplashPage';
import Login from './pages/Login';
import Register from './pages/Register';
import SearchPage from './pages/SearchPage';
import Inicio from './pages/Inicio';
import ProductDetail from './pages/ProductDetail';
import PaymentPage from './pages/PaymentPage';
import Tienda from './pages/Tienda';
import Productos from './pages/Productos';
import ListOfWishes from './pages/ListOfWishes';
import Carrito from './pages/Carrito';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {/* Ubicación */}
        <Route exact path="/" component={SplashLoader} />

        {/* Todas Direcciones */}
        <Route path="/SplashPage" component={SplashPage} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/inicio" component={Inicio} exact />
        <Route path="/searchpage" component={SearchPage} />
        <Route path="/productdetail" component={ProductDetail} />
        <Route path="/paymentpage" component={PaymentPage} />
        <Route path="/tienda" component={Tienda} />
        <Route path="/productos" component={Productos} />
        <Route path="/carrito" component={Carrito} />
        <Route path="/listOfWishes" component={ListOfWishes} />

        {/* Redirección */}
        <Redirect to="/" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;