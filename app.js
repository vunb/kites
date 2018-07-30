'use strict'
const kites = require('./lib/main');
const utils = require('./extensions/utils');

/**
 * minimalist kites application
 */
kites({
        rootDirectory: __dirname,
        loadConfig: true,
        discover: true
    })
    .use(utils)
    .init()
    .then(function (kites) {
        var total = kites.sum([2, 4, 6, 8]);
        kites.logger.info('Kites total: ', total);
        kites.logger.info('Hello world!');
    })
    .catch(function (e) {
        console.error(e.stack);
        process.exit(1);
    })