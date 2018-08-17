// Dependences
import React, { Component } from 'react';

import "./less/_import_diseno.less";
// import propTypes from 'prop-types';

// Vars Globales
 import './data/vars';

// Idioma
 import './data/es';


// Components

// Container
import Header  from './components/presentational/all/Header';
import Content from './components/presentational/all/Content';
import Footer  from './components/presentational/all/Footer';

// Presentationals
import items from './data/menu';

class App extends Component {
  constructor(props) { 
    super(props); 
  }

  componentDidMount() { 
    btn_servicios.classList.remove('rotate');
    btn_servicios.classList.remove('quieto');
    btn_clientes.classList.remove('scroll');

      // window.scrollTo(0, 0);
      // window.location.href.split('#')[0];
    // window.history.replaceState({}, document.title, "/");
   // window.history.pushState({}, document.title, "/" + "");


  };

  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <Header items={ items } />
          <Content body={children} />
        <Footer />
      </div>
    );
  }
}
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
export default App;