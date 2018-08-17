// Dependences
import React, { Component } from 'react';

class RedesProfesionales extends Component {

  render() {
  //  const { copyright = '&copy; GuilleLuy 2018' } = this.props;
    return (
      <ul className="RedesProfesionales">
          <li className='link'><a href={ url_linkedin } title="Linkedin" target='_blank'><span>Linkedin</span></a></li>
          <li className='face'><a href="https://www.facebook.com/luy.com.ar" title="Facebook"><span>Facebook</span></a></li>
      </ul>
    );
  }
}

export default RedesProfesionales;
