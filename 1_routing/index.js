const express = require('express');
const router = express.Router();
const utils = require('../utils');

utils.loadDirModules(__dirname, ['index.js', '2_static.js'], (modulePath) => {
    require(modulePath)(router);
});

module.exports = router;