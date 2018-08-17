// Dependences
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Routes
import AppRoutes from './routes';

render(
    <BrowserRouter>
        <AppRoutes/>
    </BrowserRouter>,
    document.getElementById('root')
);