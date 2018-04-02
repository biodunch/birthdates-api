const serviceLocator = require('app/lib/service_locator');

module.exports = (fn) => (req, res, next) =>
    fn(req, res, next).catch((err) => {
        serviceLocator.get('logger').error(`Error: ${err}`);
        res.send(serviceLocator.get('httpStatus').INTERNAL_SERVER_ERROR, err);
    });
