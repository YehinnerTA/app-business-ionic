    import { Route, Redirect } from 'react-router-dom';
    import Inicio from '../pages/Inicio';



    const AppRoutes = () => (
        <>
          <Route exact path="/inicio" component={Inicio} />
          <Redirect exact from="/" to="/inicio" />
        </>
      );

    export default AppRoutes;
