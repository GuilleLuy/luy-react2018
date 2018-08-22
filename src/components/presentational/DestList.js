// Dependences
import React, { Component } from 'react';

// import TrackVisibility from 'react-on-screen';

import { destacados } from '../../data/destacados';


class ArticlesDest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            destacados : destacados
        };
    };

    render() {
        if (isDevelopment) {
            var img_path_dest = '/dist/media/img/trabajos/clientes';
        } else {
            var img_path_dest = '/media/img/trabajos/clientes';
        }

        const dests = this.state.destacados.map((dest, i) => { 
        var categorias = dest.cats.replace(/[,]+/g, '</strong><strong>');
            return (  
                    <article onMouseMove={() => this.onMoveArticle(i)} onMouseOver={() => this.onHoverArticle(i)} onMouseOut={() => this.onMouseOutArticle(i)} className={dest.cliente.replace(/[. ]+/g, '-').toLowerCase()} key={i} id={i}>
                    <h2>
                        <span>{dest.cliente}</span>
                        <strong dangerouslySetInnerHTML={{__html: categorias }} />
                    </h2>
                    <p>{dest.desc}</p>
                    <img 
                        className="destacados"
                        id={"dest-"+dest.cliente.replace(/[. ]+/g, '-').toLowerCase()} 
                        alt={"Imagen de "+dest.cliente+" | "+dest.cats }
                        srcSet={img_path_dest+"/ss/"+dest.img_name+".jpg 600w, "+img_path_dest+"/sm/"+dest.img_name+".jpg 900w, "+img_path_dest+"/me/"+dest.img_name+".jpg 1300w, "+img_path_dest+"/hd/" +dest.img_name+".jpg 1920w"}
                        sizes="(max-width: 600px) 580px, (max-width: 899px) 780px, (max-width: 1400px) 1180px, 1620px" 
                        src={img_path_dest+"/me/"+dest.img_name+".jpg"} 
                        /> 
                </article>
            );
    });

  }
}

export default ArticlesDest;
