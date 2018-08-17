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
        // var sdsxt = document.createElement('a').id = 'sds';
        // var bdsdscel = document.createElement('a').id = 'bdsdsl';
      
        // LAS VARIABLES QUE AL PARECER VAN CON EL ID SOLAMENTE:
    //    global.close_menu = document.getElementById('close_menu');  
    //    global.to_next = document.getElementById('to_next');
    //    global.to_before = document.getElementById('to_before');
    //    global.footer_nav = document.getElementById("footer_nav");

    // LOS APENDEOS QUE NO ANDAN:
        // footer_nav.insertBefore(to_next, footer_nav.firstChild); 
        // footer_nav.insertBefore(close_menu, footer_nav.firstChild);
        // footer_nav.appendChild(to_before);
        // footer_nav.appendChild(open_menu);
        // footer_nav.appendChild(btn_cel);
        // to_next.setAttribute('title', ir_siguiente);
        // to_next.setAttribute('onClick', 'clickFlechas()');

        //to_before.classList.add('hide');

    
    // Orden:

        window.addEventListener('scroll', this.scrollBottom);
        btn_clientes.classList.replace('quieto','scroll');
        btn_servicios.classList.replace('quieto','rotate');
        // es ref porque usa el current
        punto.current.classList.remove('quieto','hide');

        menu_principal.appendChild(btn_clientes);


        to_home.setAttribute('href','#header');

        
    //document.getElementById('btn_clientes').classList.remove('quieto');


        // window.history.pushState({}, document.title, "/" + "");
 

    };

    componentWillUnmount(i) { 
        window.removeEventListener('scroll', this.scrollBottom);
        this.setState({
            puntoClick: false // para invertir siempre: !this.state.puntoClick. Lo dejo en false para que al volver muestre todo
        });

        punto.current.classList.remove('nar')
        punto.current.classList.add('neg')
    };



    scrollBottom(event) {
        if (window.scrollY > 140) { 
            btn_servicios.classList.add('quieto')
            btn_clientes.classList.add('quieto');
            btn_clientes.classList.remove('scroll');

            punto.current.classList.add('quieto');

            // var content = document.createElement("<YOUR_CONTENT>");
            // $('<nav id="sidebar"></nav>').appendTo('#footer');
            // $('<a class="close_nav" id="close_sidebar"></a>').appendTo($sidebar);

        } else {            
            btn_servicios.classList.remove('quieto');
            btn_clientes.classList.remove('quieto');
            btn_clientes.classList.add('scroll');
            punto.current.classList.remove('quieto');
        }
        
        if (window.scrollY > 250) {   
            btn_servicios.classList.remove('rotate');
        } else {
            btn_servicios.classList.add('rotate');
        }
    };


    onHoverArticle(i) {

        var actual = i;
        var last = this.state.destacados.length;
        var lastWork = '#'+ last;

        var sig = i + 1;
        var ant = i - 1;

        var siguiente = "#"+sig;
        var anterior =  "#"+ ant;

        to_next.setAttribute("href", siguiente);
        to_before.setAttribute("href", anterior);
       
        // opaciteable
       // to_next.addEventListener("onClick", '{() => this.clickFlechas()}');
    //         to_next.setAttribute('onClick', 'clickFlechas(e)');
               
     //   footer.classList.remove('hideado');
        to_before.classList.add('hideado');
        to_next.classList.add('apareciendo');
        to_home.classList.add('apareciendo');
        

        document.getElementsByTagName('h2')[i].classList.add('opacity1');

          if (i != 0) {
            document.getElementsByTagName('h2')[ant].classList.remove('opacity1');
          }
          if ( i != last) {
            document.getElementsByTagName('h2')[sig].classList.remove('opacity1');
          } 

        var to_beforeAt = to_before.getAttribute('href');
        var to_nextAt = to_next.getAttribute('href');

            if ( to_beforeAt === '#-1' ) {
                to_before.classList.add('hideado');
                to_before.classList.remove('apareciendo');
            } else {
                to_before.classList.remove('hideado');
                to_before.classList.add('apareciendo');
            }
            if ( to_nextAt === lastWork) {
                to_next.classList.add('hideado');
                to_next.classList.remove('apareciendo');
            } else {
                to_next.classList.remove('hideado');
                to_next.classList.add('apareciendo');
            }
        
        window.history.pushState({}, document.title, "/" + "");
        
    }


    onMoveArticle (i) {
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
                <article onMouseMove={() => this.onMoveArticle(i)}  onMouseOver={() => this.onHoverArticle(i)} className={dest.cliente.replace(/[. ]+/g, '-').toLowerCase()} key={i} id={i}>
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
                {dests}
              </section>
            </div>
        );
    }
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

export default Inicio;