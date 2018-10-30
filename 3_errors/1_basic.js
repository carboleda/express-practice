const Boom = require('boom');

//Review about handle 404 and 500 responses http://expressjs.com/es/starter/faq.html
//Review about Boom https://github.com/hapijs/boom
module.exports = function(app) {
    //1.1. Create a middleware for handle the status 404 and responds using Boom.notFound
    //and text 'Oops, the source requited not found in this server'


    //1.2. Create a middleware for handle 500 errors and responds using Boom.internal
    //and text 'Something broke!'


    return app;
}