// Dependences
import React, { Component } from 'react';
import {Circle2} from "react-preloaders";
import { isMobile } from "react-device-detect";

import "./less/_import_diseno.less";

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

    if (isMobile) {
      // return <div> This content is unavailable on mobile</div>
     
      the_body.classList.add('mobile');
    } else {
      the_body.classList.add('no_mobile');
    }

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


            <React.Fragment>
            <Circle2
             //Default #2D2D2D
              bgColor={"#1e1e1e"} //Default #F7F7F7
              time={1400} //Default #1300
            />


          <Content body={children} />


                </React.Fragment>


        <Footer />
      </div>



    );
  }
}
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
export default App;