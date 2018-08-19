// Dependences
import React, { Component } from 'react';

// Data
import { destacados } from '../../data/destacados';

class Inicio extends Component {

    constructor(props) {
        super(props);
      //  window.scrollTo(0, 0);
        the_body.id = 'body_home';
        this.state = {
            destacados : destacados, // 
            puntoClick : false,
            inicioClick: true
        };
       
        //     Cuando se clickea un boton se opaquean y despointereventeas, 
        //     al scrollear un poco sobre el trabajo se vuelve a activar 


    };


   componentWillMount(){
        global.inicioOn();
   };
    
    componentDidMount() { 
        window.scrollTo(0, 0);
        btn_cel.classList.remove('apareciendo');
        window.addEventListener('scroll', this.scrollBottom);
        btn_clientes.classList.remove('prescroll');
        btn_clientes.classList.replace('quieto','scroll');
        btn_servicios.classList.replace('quieto','rotate');
        punto.current.classList.remove('quieto','hide');


        // var parent= document.getElementById('menu_principal');
        // var child=parent.querySelectorAll('a');
        // var aClientes = child[0];
        // aClientes.id='to_home2';
        // aClientes.classList.add('apareciendo');
        // footer_nav.appendChild(aClientes);

        // btn_clientes.appendChild('to_home2');

        // menu_principal.appendChild(btn_clientes);

        menu_principal.appendChild(link_clientes);

        to_home.setAttribute('href','#header');
        to_before.classList.remove('apareciendo');
    };

    componentWillUnmount() {
    }

    componentWillUnmount(i) { 
        window.removeEventListener('scroll', this.scrollBottom);

        this.setState({
            puntoClick: !this.state.puntoClick
        });
        punto.current.classList.replace('nar','neg')
    };

    scrollBottom() {
        if (window.scrollY > 140) { 
            btn_servicios.classList.add('quieto')
            btn_clientes.classList.replace('scroll','quieto');
            punto.current.classList.add('quieto');
        } else {            
            btn_servicios.classList.remove('quieto');
            btn_clientes.classList.replace('quieto','scroll');
            punto.current.classList.remove('quieto');
        }

        if (window.scrollY > 250) {   
            btn_servicios.classList.remove('rotate');
        } else {
            btn_servicios.classList.add('rotate');
        }
    };

    onHoverArticle(i) {
        to_next.classList.add('apareciendo');
        to_before.classList.add('hideado');
        to_home.classList.add('apareciendo');

        var actual = i;
        var last = this.state.destacados.length;
        var lastBef = last - 1;
        var lastWork = '#'+ last;
        var sig = i - 1;
        var ant = i + 1;
        var siguiente = "#"+sig;
        var anterior =  "#"+ ant;
        to_next.setAttribute("href", siguiente);
        to_before.setAttribute("href", anterior);

        var article = document.getElementById(i);
        article.classList.add('visible');
        
        var to_beforeAt = to_before.getAttribute('href');
        var to_nextAt = to_next.getAttribute('href');

            if ( to_beforeAt === lastWork ) {
                to_before.classList.replace('apareciendo','hideado');
            } else {
                to_before.classList.replace('hideado','apareciendo');
            }
            if ( to_nextAt === '#-1') {
                to_next.classList.replace('apareciendo','hideado');
            } else {
                to_next.classList.replace('hideado','apareciendo');
            }
          
        window.history.pushState({}, document.title, "/" + "");
    }

    onMoveArticle (i) {
        footer_nav.classList.remove('hideado');
    }

    onMouseOutArticle (i) {
        var article = document.getElementById(i);
        article.classList.remove('visible');
        footer_nav.classList.remove('hideado');

    }


    render() {
        if (isDevelopment) {
            var img_path_dest = '/dist/media/img/trabajos/clientes';
        } else {
            var img_path_dest = '/media/img/trabajos/clientes';
        }

        const dests = this.state.destacados.map((dest, i) => { // this.state.destacados.reverse().map
        var categorias = dest.cats.replace(/[,]+/g, '</strong><strong>');
            return (
                <article onMouseMove={() => this.onMoveArticle(i)} onMouseOver={() => this.onHoverArticle(i)} onMouseOut={() => this.onMouseOutArticle(i)} className={dest.cliente.replace(/[. ]+/g, '-').toLowerCase()} key={i} id={i}>
                    <h2>
                        <span>{dest.cliente}</span>
                        <strong dangerouslySetInnerHTML={{__html: categorias }} />
                    </h2>
                    <p>{dest.desc}</p>
                    {/*
                        Para que bundlee la imagen:
                        src={require("../../../../media/img/trabajos/clientes/me/"+dest.img_name+".jpg")}
                    */}
                    <img 
                        className="destacados"
                        id={"dest-"+dest.cliente.replace(/[. ]+/g, '-').toLowerCase()} 
                        alt={"Imagen de "+dest.cliente+" | "+dest.cats }
                        srcSet={img_path_dest+"/ss/"+dest.img_name+".jpg 600w, "+img_path_dest+"/sm/"+dest.img_name+".jpg 900w, "+img_path_dest+"/me/"+dest.img_name+".jpg 1300w, "+img_path_dest+"/hd/" +dest.img_name+".jpg 1920w"}
                        sizes="(max-width: 600px) 580px, (max-width: 899px) 780px, (max-width: 1400px) 1180px, 1620px" 
                        src={img_path_dest+"/me/"+dest.img_name+".jpg"} 
                        /> 
                </article>
            )
        });
        
        return (
            <div className="Inicio">
              <section id="works">
                {dests.reverse()}
              </section>
            </div>
        );
    }
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

export default Inicio;