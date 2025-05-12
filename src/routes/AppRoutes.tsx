    import { Route, Redirect } from 'react-router-dom';
    import Inicio from '../pages/Inicio';
    import React from 'react';


    const AppRoutes = () => (
        <>
          <Route exact path="/inicio" component={Inicio} />
          <Redirect exact from="/" to="/inicio" />
        </>
      );

    export default AppRoutes;
