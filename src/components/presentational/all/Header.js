

////////////// VER
////////////// http://www.hackingwithreact.com/read/1/13/rendering-an-array-of-data-with-map-and-jsx

// Dependences
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Header extends Component {

  constructor(props) { 
    super(props); 
      
      global.header = React.createRef();
      global.punto = React.createRef();
      global.h1_ref = React.createRef();
      global.scrollInicio = '900';

    this.state = {
      puntoClick : false
    }
  }

  
  componentDidMount() { // variables globales siempre aca
//    global.btn_clientes = document.getElementById('btn_clientes');
//    global.btn_servicios = document.getElementById('btn_servicios');
  //  global.btn_trabajos = document.getElementById('btn_trabajos');
    //global.home_pres = document.getElementById('home_pres');
    // global.punto_inicio = document.getElementById('punto_inicio');
  }

  componentWillMount(){
    global.inicioOff = (data) => {
      this.setState({
        inicioClick:false
      });
    };
    global.inicioOn = (data) => {
      this.setState({
        inicioClick:true
      });     
    };
  }

  empiezaScroll(e) {
    e.preventDefault();
    if(e.target.id === 'btn_clientes') {
      window.scrollTo(0,scrollInicio);
    }
  }

  puntoInicio(e) {
    e.preventDefault();
      this.setState({
        puntoClick : true,  // para invertir siempre: !this.state.estadoAInvertir
        inicioClick : true
      });
      !window.scrollTo(0, 0);
      the_body.classList.toggle('over_show');

      btn_servicios.classList.remove('hide');
      btn_clientes.classList.remove('hide');
      btn_servicios.classList.add('rotate');
      btn_clientes.classList.add('scroll');

      // no borrar / oculto por ahora
      //document.getElementById('btn_trabajos').classList.add('quieto');

  };


  render() {

    const { puntoClick, inicioClick } = this.state;
    const { items} = this.props;
      var { title_1 = "<strong>Guillermo Luy</strong> " + cliente_desc } = this.props;
      var { title_2 = '<span class="h1_1">Guill<span>ermo</span></span><span class="h1_2">Luy</span><span class="h1_3">diseño &amp;</span><span class="h1_4">programación</span>' } = this.props;

    return (
      <header id="header">
        <p id='punto_inicio' ref={punto} className={`${puntoClick ? 'neg' : 'nar'} ` } onClick={(e) => this.puntoInicio(e)}><span>{  empezar  }</span></p>
        <div id="home_pres" className={`${puntoClick ? 'show' : 'hide'}`}><div id="pres-orange"></div><div id="pres-black"></div>
          <h1 ref={h1_ref} id={`${inicioClick ? 'h1-title' : 'h1-inicial'}`} dangerouslySetInnerHTML= {{__html : `${inicioClick ? title_2 : title_1 }`} }/>
        </div>
        <em className={`${puntoClick ? 'hide' : ''}`} > 
          <span className="che" id="pst">pst..</span>
          <span className="che" id="aca">&lt; acá</span>
          <span className="che" id="apalalala">!</span>
        </em>
        <nav id='menu'>
          <ul id="menu_principal">
            {items && items.map ((item,key) => 
            <li id={"btn_"+item.clase} className={item.clase} key={key} onClick={(e) => this.empiezaScroll(e)}>
              <Link id={'link_'+item.clase} to={'/'+item.url}>{item.title}</Link>
            </li>)}
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;