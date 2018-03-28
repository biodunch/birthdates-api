/**
 * @description Sets up the restify routes.
 */

'use strict';

module.exports.register = (server, serviceLocator) => {

    server.get({
        path: '/home',
        name: 'Index',
        version: '1.0.0'
    },
    (req, res, next) => res.send("welcome to Body101 api"));

    server.get({
        path: '/WHY',
        name: 'GIRL',
        version: '1.0.0'
    },
    (req, res, next) => res.send("welcome to Body101 api"));

}