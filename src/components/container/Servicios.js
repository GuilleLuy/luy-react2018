// Dependences
import React, { Component }  from 'react';
import TextoCV  from '../presentational/TextoCV';
import ListRedesProfesionales  from '../presentational/ListRedesProfesionales';
import ListTrabServs  from '../presentational/ListTrabServs';

class Servicios extends Component {
    constructor(props) {
        super(props);
        this.state = {
          puntoClick : false,
          intervalId: 0
        }
        the_body.id = 'body_servs';
        global.servs_aside = React.createRef(); 
        global.main = React.createRef(); 
        global.ref_title_servs = React.createRef(); 
        
    }

    componentWillMount(){
        global.inicioOff();
    }

    componentDidMount() { 
        window.scrollTo(0, 0);
        main.current.scrollTop=0

        window.addEventListener('scroll', this.scrollBottomServs); 
        home_pres.classList.remove('hide');




        footer_nav.appendChild(link_clientes);
        punto_inicio.classList.add('hide');
        // no borrar / oculto por ahora
        // btn_trabajos.classList.add('quieto');
 //        if(!isDevelopment) { }
        
        history.pushState({}, document.title, "/" + "");

        // esto va en redes, borrar de aca cuando este
        // btn_cel.classList.add('apareciendo');
        to_top.classList.add('apareciendo');
        
        to_home.classList.remove('apareciendo');
        to_next.classList.remove('apareciendo');
        to_before.classList.remove('apareciendo');


        // var myArray = ['estasyendoaltop', 'vamosalomasalto', 'daleasisube','otramasynosvamos', 'dalecortitonomas', 'vospodriastrabajardeesto', 'quizaestanoeslamanera','miravoooo']; 
        // var rand = myArray[Math.floor(Math.random() * myArray.length)];
        // to_home.setAttribute('href','servicios#'+rand);

        // to_home.setAttribute('href','')
        // to_home.setAttribute('onClick', '{() => this.scrollToTop(this)}');

        // to_before.classList.add('apareciendo');
        // to_before.classList.remove('hideado');

        // to_before.setAttribute('onClick','toTop()');
        // to_before.setAttribute('href','servicios/');
     //   the_body.setAttribute('onLoad','checkIt()');
        
    //    to_before.setAttribute('title', subir);

        link_clientes.setAttribute('title', ir_home);
        link_clientes.classList.remove('apareciendo');

    };

    componentWillUnmount() { 
        window.removeEventListener('scroll', this.scrollBottomServs);
        the_body.classList.add('over_show');
        punto.current.classList.replace('nar','neg');
    };

    toTop() {
        window.scrollTo(0, 0);

    }

    checkIt() {
        if(document.cookie.indexOf('mycookie')==-1) {
          // cookie doesn't exist, create it now
          document.cookie = 'mycookie=1';
          console.log(document.cookie);
        }
        else {
          // not first visit, so alert
          alert('You refreshed!');
        }
      }

    scrollBottomServs() {
        // if (window.scrollY > 0) { 
        //     title_servs.classList.add('relative');
        // }
        if (window.scrollY > 100) { 
            servs_aside.current.classList.add('toP0');   
            ref_title_servs.current.classList.add('relative');
        } else { 
            servs_aside.current.classList.remove('toP0');
            ref_title_servs.current.classList.remove('relative');
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
        } else {                 
            servs_aside.current.classList.remove('toP-30');
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

        if (window.scrollY > 1050) { 
            servs_aside.current.classList.add('toP-70'); 
        } else {
            servs_aside.current.classList.remove('toP-70'); 
        }
        if (window.scrollY > 1200) { 
            servs_aside.current.classList.add('toP-80'); 
        } else {
            servs_aside.current.classList.remove('toP-80'); 
        }
        if (window.scrollY > 1350) { 
            servs_aside.current.classList.add('toP-90'); 
        } else {
            servs_aside.current.classList.remove('toP-90');
        }





    };

    


    //   <button title='Back to top' className='scroll' 
    //   onClick={ () => { this.scrollToTop(); }}>
    //    <span className='arrow-up glyphicon glyphicon-chevron-up'></span>
    //  </button>

    render() {
        return (
            <aside id='services' className="Servicios" ref={main}>
            <h1 ref={ref_title_servs} id='title_servs'>{ servicios_title }</h1>
                <div id='texto_init'>
                    <TextoCV />
                    <ListRedesProfesionales />
                </div>
                <section id="servs_links" ref={servs_aside}>
                    <div id='links'>
                        <ListTrabServs/>
                    </div>
                </section>


            </aside>
        );
    }
}
export default Servicios;