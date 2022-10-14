'use strict';
const path = require('path');
module.exports = {
    config: path.resolve(__dirname, 'config.json'),
    'migrations-source-path': path.join(__dirname, 'src/database/migrations'),
};
