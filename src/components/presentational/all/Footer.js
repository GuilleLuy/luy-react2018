// Dependences
import React, { Component } from 'react';
import {browserHistory } from 'react-router';
import propTypes from 'prop-types';

class Footer extends Component {

  constructor(props) { 
    super(props); 
    this.clickFlechas = this.clickFlechas.bind(this);
  }

    // FOOTER 


        // FALTA EL MENU DE ARRIBA! mails, idiomas, skype, messenger. Ver si redirigen a welcome y servicios o si haay otro modo mejor
        
        // ver que mas hacer aca y una vez listo ver que mas queda: page404, mails, idiomas, skype, messenger y listo todo.



        
    // todos estos iconitos "to_" deberian tener position absolute y estar apartados de los que "vienen" que siempre deben flotar  a la derecha.
        // ver primero el responsivo como responde a cada resolucion e imitar eso en cada una pero teniendo en cuenta siempre que el home quede bien centrado en el texto de servicios.

        // el boton de celular en servicios VA EN REDES, no en FOOtER, es icono de whatsapp, tamaño igual a redes alineado todo. 

        // cuawndo se scrolea mucho en inicio al ir luego a servicios no va al top de todo

        // los textos tienen que tener un cerrar, se tienen que crear los iconitos y tener un cerrar y todos estos cerrar mas el del menu tienen que funcionar como en el jquery...
        // ...pasando una funcion que oculte en lugar de appendear como está ahora.

        // Ver alguna funcion de javascript que haga lo mismo que el one 

        // ir comprobando con version luy_new que parece andar mejor que la online.

        // ver como simplificar codigo, por ejemplo, juntar todos los appendeados en un sola linea o funcion 
        // En servicios se podria ocultar el link de clientes y dejar el de abajo del menu, a su vez modificarle el attr al to_home que linkee en servicios a home: o sea, "/"

        /// pasar todo lo que sea pasable a grid en css.


      // https://stackoverflow.com/questions/36080977/jquery-one-function-pure-js
      //   function one(dom, event, callback) {
      //     function handler(e) {
      //         callback.call(this, e);
      //         this.removeEventListener(event, handler);
      //     }
      //     dom.addEventListener(event, handler); 
      // }

  overFheclas() {
   // footer.classList.remove('hideado');
  }


 
  clickFlechas(){
    window.history.pushState({}, document.title, "/" + "");
    footer_nav.classList.add('hideado');
  }

  render() {
    const { copyright = '&copy; 2018 GuilleLuy / Tel: +540342-155003958 / E-mail: <a href="mailto:&#103;&#117;&#105;&#108;&#108;&#101;&#114;&#109;&#111;&#108;&#117;&#121;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">&#103;&#117;&#105;&#108;&#108;&#101;&#114;&#109;&#111;&#108;&#117;&#121;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;</a>' } = this.props;
    return (
      <footer id="footer">
        <nav id="footer_nav" history={browserHistory}>
          <a id="close_menu"></a>
          <a id="to_next" title={ ir_siguiente } onClick={() => this.clickFlechas(this)} onMouseOver={() => this.overFheclas()}><span>{ ir_siguiente }</span></a>
          <a id="to_home" title={ ir_home }><span>{ ir_home }</span></a>          
          <a id="to_before" title={ ir_anterior } onClick={() => this.clickFlechas(this)} onMouseOver={() => this.overFheclas()}><span>{ ir_anterior }</span></a>
          <a id="open_menu"></a>
          <a href="tel:543425033958" id="btn_cel" title={contact_call}><span>{ contact_call }</span></a>
        </nav>
        <p dangerouslySetInnerHTML={{__html: copyright }} />
      </footer>
    );
  }
}

export default Footer;
