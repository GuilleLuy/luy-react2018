// Dependences
import React, { Component } from 'react';

class RedesProfesionales extends Component {

  render() {
  //  const { copyright = '&copy; GuilleLuy 2018' } = this.props;
    return (
      <ul className="RedesProfesionales">
          <li id='linkedin'><a href={ url_linkedin } title="Linkedin" target='_blank'><span>Linkedin</span></a></li>
          <li id='facebook'><a href="https://www.facebook.com/luy.com.ar" title="Facebook"><span>Facebook</span></a></li>
          <li id='whatsapp'><a href="https://api.whatsapp.com/send?phone=[54][3425033958]" title="Facebook"><span>Facebook</span></a></li>
          <li id="btn_cel"><a href="tel:543425033958" title={contact_call}><span>{ contact_call }</span></a></li>
      </ul>
    );
  }
}

export default RedesProfesionales;
