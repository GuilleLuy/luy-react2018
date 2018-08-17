// Dependences 
import React, { Component } from 'react';


// -- segun el tutorial se incluye para los props items de body (links del menu), que se definen en static propTypes, lo cierto es que sin estas dos cosas tambi'en funciona

class Content extends Component {

  render() {
    const { body } = this.props;
    return (
      <div className="Content">
        {body}
      </div>
    );
  }
}
export default Content;