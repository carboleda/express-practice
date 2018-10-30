//Review about middlewares in https://expressjs.com/es/guide/using-middleware.html
module.exports = function(app) {
    //1.1. Review about res.cookie in http://expressjs.com/es/4x/api.html#res.cookie
    //Create a middleware that intercept request on /*
    //and set a cookie named 'domain' with value 'devhack.com' on all request recived



    //1.2. Create a middleware that intercept all request on /*
    //and print on console the method and url
    //Example: console.log(`New request to ${req.method} ${req.url}`);


    return app;
}