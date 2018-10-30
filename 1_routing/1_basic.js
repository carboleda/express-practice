module.exports = function(router) {
    //An error on purpose to test error handling
    router.get('/basic/error', function basicText(req, res) {
        throw new Error('On purpose error');
    });


    //1.1. Defines a GET route /basic/text that responds a text 'Hello express'



    //1.2. Defines a GET route /basic/json that responds a json {hello: 'express'}

};