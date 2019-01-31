const utils = require('../utils');

module.exports = function(app) {
    return new Promise((resolve, reject) => {
        utils.loadDirModules(__dirname, ['index.js'], (modulePath) => {
            require(modulePath)(app);
        }, resolve);
    });
};