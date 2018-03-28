'use strict';

const   serviceLocator      = require('app/lib/service_locator'),
        config              = require('app/configs/configs')();

serviceLocator.register('logger', () => {
    const logger = require('app/lib/logger').create(config.application_logging)

    return logger;
})

serviceLocator.register('shortid', () => {
    return require('shortid');
})

module.exports = serviceLocator;