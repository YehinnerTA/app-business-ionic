import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Inicio from './pages/Inicio';
import ProductDetail from './pages/ProductDetail';
// Conexión de archivos intermediario
import SplashLoader from './pages/SplashLoader';

// Ubicación de vistas
import SplashPage from './pages/SplashPage';
import Login from './pages/Login';
import Register from './pages/Register';
<<<<<<< HEAD

=======
import Home from './pages/Home';
import Inicio from './pages/Inicio';
import ProductDetail from './pages/ProductDetail';
>>>>>>> ba4f23ed9f667ae72cc7bb3b44c1505598d1084e

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
        <Route path="/SplashPage" component={SplashPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
<<<<<<< HEAD
        <Route path="/inicio" component={Inicio} exact />
        <Route path="/productdetail" component={ProductDetail} />
=======
        <Route path="/home" component={Home} exact />
        <Route path="/inicio" component={Inicio} />
        <Route path="/productdetail" component={ProductDetail} />

>>>>>>> ba4f23ed9f667ae72cc7bb3b44c1505598d1084e
        {/* Redirección */}
        <Redirect to="/" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;