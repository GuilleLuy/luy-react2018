

// ARCHIVO DE GLOBALES APARTE:
window.isDevelopment = process.env.NODE_ENV !== 'production';

if(isDevelopment) {
  window.img_trab_url = "/dist/media/img/trabajos/clientes/";
}else {
  window.img_trab_url = "/media/img/trabajos/clientes/";
}


window.isDevelopment = process.env.NODE_ENV !== 'production';
window.the_body = document.body;







