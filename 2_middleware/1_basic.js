//Revisa sobre middlewares en https://expressjs.com/es/guide/using-middleware.html
module.exports = function(app) {
    //1.1. Revisa sobre res.cookie en http://expressjs.com/es/4x/api.html#res.cookie
    //Crea un middleware que intercepte los request en /*
    //y establezca una cookie llamada 'domain' con valor 'devhack.com' en todos los request recibidos



    //1.2. Crea un middleware que intercepte todos los request en /*
    //e imprima en consola el nombre del metodo http y la url
    //Example: console.log(`New request to ${req.method} ${req.url}`);


    return app;
}