const express = require('express');
const router = express.Router();
const utils = require('../utils');

utils.loadDirModules(__dirname, ['index.js', '3_static.js'], (modulePath) => {
    require(modulePath)(router);
});

module.exports = router;