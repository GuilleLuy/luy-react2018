// Dependences
import React from 'react';
import { Route, Switch, browserHistory  } from 'react-router-dom';

// Components
import App from './App';
import Inicio from './components/container/Inicio';
import Servicios from './components/container/Servicios';
// import Trabajos from './components/container/Trabajos';
import Page404 from './components/container/Page404';

var ojete = url_servs;

// <Switch> // donde dos rutas coinciden la ejecuta y corta
const AppRoutes = () =>
<App>
    <Switch history={browserHistory}>

        <Route exact path="/" component={Inicio} />
        <Route path={url_servs} component={Servicios} />
        {/* <Route path={url_works} component={Trabajos} /> */}
        <Route component={Page404} />

    </Switch>
</App>


export default AppRoutes;