const Boom = require('boom');

//Revisa sobre como manejar respuestas 404 y 500 en http://expressjs.com/es/starter/faq.html
//Revisa sobre Boom en https://github.com/hapijs/boom
module.exports = function(app) {
    //NO MODIFICAR: Este es un error a proposito para probar el manejo de errores 500
    app.get('/purpose/error', function basicText(req, res) {
        throw new Error('On purpose error');
    });


    //1.1. Crea un middleware para manejar los estados 404 y responder usando Boom.notFound
    //y un texto 'Oops, el recurso solicitado no fue encontrado en este servidor'



    //1.2. Crea un middleware para manejar errores 500 y responder usando Boom.internal
    //y un texto 'Algo salio mal!'



    return app;
}