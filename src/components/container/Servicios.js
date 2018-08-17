// Dependences
import React, { Component }  from 'react';
import TextoCV  from '../presentational/TextoCV';
import ListRedesProfesionales  from '../presentational/ListRedesProfesionales';
import ListTrabServs  from '../presentational/ListTrabServs';

class Servicios extends Component {

    constructor(props) {
        super(props);
       // window.scrollTo(0, 0);
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
        window.addEventListener('scroll', this.scrollBottom); 

        
      //  global.footer_nav = document.getElementById("footer_nav");
        



        home_pres.classList.remove('hide');
        btn_clientes.classList.remove('prescroll');
        btn_clientes.classList.remove('scroll');
        btn_clientes.classList.add('quieto');
        
      //  btn_servicios.classList.add('hide');
        punto_inicio.classList.add('hide');

        // no borrar / oculto por ahora
        // document.getElementById('btn_trabajos').classList.add('quieto');
        

        if(!isDevelopment) {
          history.pushState({}, document.title, "/" + "");
        }

        // title_position = title_position.innerWidth;
        // h1_ref.current.style.left= title_position;
        // var $title_position = $('#pres-orange').css("width");
        // $title
        //   .css({'left':$title_position})
        // ;

        btn_cel.classList.add('apareciendo');
    //    to_home.setAttribute('href','/');
        to_before.classList.remove('apareciendo');
        // to_before.classList.add('hide');
        // to_next.classList.add('hide');
        to_next.classList.remove('apareciendo');
        to_home.classList.remove('apareciendo');
    };

    componentWillUnmount() { 
        window.removeEventListener('scroll', this.scrollBottom);
        the_body.classList.add('over_show');
        punto.current.classList.replace('nar','neg');
    };

    scrollBottom(event) {
        if (window.scrollY > 10) { 
            btn_clientes.classList.add('prescroll');
            } else { btn_clientes.classList.remove('prescroll'); servs_aside.current.style.marginTop="0vh"; 
        }

        if (window.scrollY > 150) { servs_aside.current.classList.add('servs-anim') }
        if (window.scrollY > 300) { servs_aside.current.style.marginTop="-20vh"; }

        if (window.scrollY > 450) { 
            servs_aside.current.style.marginTop="-30vh";
            footer_nav.appendChild(btn_clientes);
            btn_clientes.classList.add('scroll');
    //        btn_clientes.classList.remove('quieto');
        } else {                 
      //      btn_clientes.classList.add('quieto');
            
            document.getElementById('menu_principal').appendChild(btn_clientes);
            btn_clientes.classList.remove('scroll');
        }
        if (window.scrollY > 600) { servs_aside.current.style.marginTop="-40vh"; }
        if (window.scrollY > 750) { servs_aside.current.style.marginTop="-50vh"; }
        if (window.scrollY > 900) { servs_aside.current.style.marginTop="-60vh"; }
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