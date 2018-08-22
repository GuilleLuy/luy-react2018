// Dependences
import React, { Component } from 'react';




class ListTrabServs extends Component {

  render() {
    return (
      <ul className="ListTrabServs">
          <li id='dis_web'>
              <span>{ serv_dis_des }:</span>
              <a href="https://thedarksideseeds.com" target="_blank" className="col_1 fon_2">TheDarkSideSeeds</a>
              <a href="http://minfraestructura.com.ar" target="_blank" className="col_1_2 fon_3">MInfraestructura</a>
              <a href="http://vialfe.com.ar" target="_blank" className="col_2 fon_3">Vialfe</a>
              <a href="http://bounousmaquinarias.com" target="_blank" className="col_3 fon_2">Bounous</a>
              <a href="http://madebel.es" target="_blank" className="col_4 fon_1" >Madebel (2008)</a>
              {/* <a href="http://rinconrh.com.ar" target="_blank" className="col_5 fon_1">Rincon R.H.</a> */}
          </li>
          <li id='dis_3d'>
              <span>{ serv_3d }:</span>
              <a href="https://www.youtube.com/watch?v=Ni398cztwpY" target="_blank" className="col_1 fon_1">Carla XX</a>
              <a href={img_trab_url + "ss/auto-v5.jpg"} className="link-auto-v5 col_2 fon_3">Auto 5.0</a>
              <a href="{ img_trab_url }ss/bodyski.jpg" className="link-bodyski col_3 fon_1">BodySki</a>
          </li>
          <li id='dis_impr'>
          <span dangerouslySetInnerHTML={{__html: serv_impr }} />
              <a href="{ img_trab_url }ss/carteles.jpg" className="link-carteles col_2 fon_2">C.A. Colón</a>
              <a href="{ img_trab_url }ss/cyd-schaffer.jpg" className="link-cyd-schaffer col_3 fon_1">C&D Schaffer</a>
  { 
      // <a className="col_1 fon_2">La Higuera de Bartolo</a>
  }
              <a href="{ img_trab_url }ss/pronto-express.jpg" className="link-pronto-express col_1_2 fon_3">Pronto Express</a>
              <a href="{ img_trab_url }ss/canapina.jpg" className="link-canapina col_3 fon_2">Canapina</a>
              <a href="{ img_trab_url }ss/folletos.jpg" className="link-folletos col_5 fon_1">{ serv_folletos }</a>
          </li>
          <li id='dis_vid'>
              <span>{ serv_vid }:</span>
              <a href="{ video_trab_url }canapina-face-1.php" data-fancybox data-type="ajax" className="col_3 fon_2">Canapina</a>
              <a href="{ video_trab_url }pronto-express-spot.php" data-fancybox data-type="ajax" className="col_1 fon_3">Pronto Express</a>
  {
      // <a href="https://www.youtube.com/watch?v=zj8gwFbZp1g" target="_blank" className="col_5 fon_2">Chambones Producyon's</a> 
  }
          </li>
          <li id='dis_red'>
              <span>{ serv_redes }:</span>
  {
      // <a href="https://www.facebook.com/Renzullimotos/" target="_blank" className="col_4 fon_1">Renzulli Motos</a>
  }
              <a href="https://www.facebook.com/canapina.sta.fe/" target="_blank" className="col_2 fon_2">Canapina</a>
              <a href="https://www.facebook.com/Pronto-Express-451144031638476/" target="_blank" className="col_3 fon_3">Pronto Express</a>
          </li>
          <li>
              <span>{ ademas }:</span>
              <a className="col_1 fon_1">{ serv_regist }.</a>
          </li>
      </ul>
    );
  }
}

export default ListTrabServs;
