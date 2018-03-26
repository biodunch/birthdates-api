const config = require('./configs/configs');

const server = require('restify').createServer({
    name: config.appName,
    versions: ['1.0.0'],
    formatters: {
        'application/json': require('lib/formatters/jsend')
    }
})