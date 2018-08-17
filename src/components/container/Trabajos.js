
// Dependences
import React, { Component }  from 'react';
// const isDevelopment = process.env.NODE_ENV !== 'production';

import { Link  } from 'react-router-dom';
import items from '../../data/trabajos';

class Trabajos extends Component {
    
    constructor() {
        super(); 
        the_body.id = 'body_works';
        // lo que sea que ponga aca a las variables lo hace fuera de esta seccion, / actua como willmount?
        //document.getElementById('btn_clientes').classList.remove('hide');
    }

    componentDidMount() { 
        //window.addEventListener('scroll', this.scrollBottom); 
        
        btn_clientests.classList.remove('scroll');
        btn_clientes.classList.remove('hide');
        btn_clientes.classList.add('quieto');
        punto_inicio.classList.add('hide');

        // mentira, ver de resolverlo bien
        // https://tylermcginnis.com/react-router-cannot-get-url-refresh/
        if(!isDevelopment) {
            history.pushState({}, document.title, "/" + "");
         }
    };
    
    render() {
        return (
            <div className="trabajos">
                <h1>Listado de trabajos</h1>
                <ul className="trabajosListado">
                    {items && items.map ((item,key) => 
                    <li key={key}>
                    <Link to={'trabajos/'+item.url}>{item.titulo}</Link>
                    </li>
                    )} 
                </ul>
            </div>
        )
    }
}

export default Trabajos;