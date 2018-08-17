// Dependences
import React, { Component } from 'react';

class TextoCV extends Component {

  render() {
  //  const { copyright = '&copy; GuilleLuy 2018' } = this.props;
    return (
      <div className="TextoCV">
        <p dangerouslySetInnerHTML={{__html: cv_texto_init_1 }} />
        <p dangerouslySetInnerHTML={{__html: cv_texto_init_2 }} />
        <p dangerouslySetInnerHTML={{__html: cv_texto_init_3 }} />
        <p dangerouslySetInnerHTML={{__html: cv_texto_init_4 }} />
        <p dangerouslySetInnerHTML={{__html: cv_texto_init_5 }} />
        <p dangerouslySetInnerHTML={{__html: cv_texto_init_6 }} />
        <p dangerouslySetInnerHTML={{__html: cv_texto_init_7 }} />
        <p dangerouslySetInnerHTML={{__html: cv_texto_init_8 }} />
        <p dangerouslySetInnerHTML={{__html: cv_texto_init_9 }} />
      </div>
    );
  }
}

export default TextoCV;
