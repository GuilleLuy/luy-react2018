// Dependences
import React, { Component }  from 'react';
import TextoCV  from '../presentational/TextoCV';
import ListRedesProfesionales  from '../presentational/ListRedesProfesionales';
import ListTrabServs  from '../presentational/ListTrabServs';

class Servicios extends Component {
    constructor(props) {
        super(props);
        this.state = {
          puntoClick : false
        }
        the_body.id = 'body_servs';
        global.servs_aside = React.createRef(); 
        
    }

    componentWillMount(){
        global.inicioOff();
    }

    componentDidMount() { 
        window.scrollTo(0, 0);
        window.addEventListener('scroll', this.scrollBottomServs); 
        home_pres.classList.remove('hide');
        
        // var child= document.getElementById('menu_principal').children;

        // var aClientes = child[0];
        
        // aClientes.classList.add('apareciendo');
         footer_nav.appendChild(link_clientes);
         

        // btn_clientes.classList.add('quieto');
        // btn_clientes.classList.remove('scroll');
        

        punto_inicio.classList.add('hide');
        // no borrar / oculto por ahora
        // btn_trabajos.classList.add('quieto');
        if(!isDevelopment) { }
          history.pushState({}, document.title, "/" + "");
       


        // esto va en redes, borrar de aca cuando este
        btn_cel.classList.add('apareciendo');
        
        to_before.classList.add('apareciendo');
        to_before.classList.replace('hideado','apareciendo');
        to_before.setAttribute('href','servicios#home_pres');
        to_before.innerHtml='sss';
       
        to_next.classList.remove('apareciendo');
        to_home.classList.remove('apareciendo');
        to_before.classList.add('apareciendo');
        link_clientes.classList.remove('apareciendo');
    };

    componentWillUnmount() { 
        window.removeEventListener('scroll', this.scrollBottomServs);
        the_body.classList.add('over_show');
        punto.current.classList.replace('nar','neg');
    };

    scrollBottomServs() {
        if (window.scrollY > 100) { 
//            btn_clientes.classList.replace('quieto','prescroll');
    //        punto.current.classList.add('quieto');
            servs_aside.current.classList.add('toP0');
        } else { 
//            btn_clientes.classList.replace('prescroll','quieto'); 
            servs_aside.current.classList.remove('toP0');
  //          punto.current.classList.remove('quieto');
        }

        if (window.scrollY > 200) { 
            servs_aside.current.classList.add('servs-anim');
        }

        if (window.scrollY > 300) { 
            servs_aside.current.classList.add('toP-20');
        } else {
            servs_aside.current.classList.remove('toP-20');
        }

        if (window.scrollY > 450) { 
            servs_aside.current.classList.add('toP-30');
      
            // btn_clientes.classList.remove('prescroll'); 
            // btn_clientes.classList.add('scroll');
        } else {                 
            servs_aside.current.classList.remove('toP-30');
         //   menu_principal.appendChild(btn_clientes);
            // btn_clientes.classList.remove('scroll');
         //   btn_clientes.classList.add('prescroll');

        }

        if (window.scrollY > 600) { 
            servs_aside.current.classList.add('toP-40'); 
        } else {
            servs_aside.current.classList.remove('toP-40'); 
        }
        
        if (window.scrollY > 750) { 
            servs_aside.current.classList.add('toP-50'); 
        } else {
            servs_aside.current.classList.remove('toP-50'); 
        }

        if (window.scrollY > 900) { 
            servs_aside.current.classList.add('toP-60'); 
        } else {
            servs_aside.current.classList.remove('toP-60');
        }
    };

    render() {
        return (
            <aside id='services' className="Servicios">
                <div id='texto_init'>
                    <TextoCV />
                    <ListRedesProfesionales />
                </div>
                <section id="servs_links" ref={servs_aside}>
                    <div id='links'>
                        <h1>{ servicios_title }</h1>
                        <ListTrabServs/>
                    </div>
                </section>
            </aside>
        );
    }
}
export default Servicios;