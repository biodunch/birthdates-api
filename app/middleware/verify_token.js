'use strict';

const   serviceLocator = require('app/lib/service_locator'),
        config  = require('app/configs/configs'),
        httpStatus = require('http-status'),
        jwt = serviceLocator.get('jwt');

module.exports = (req, res, next) => {

    let token = req.query.token || req.headers["x-access-token"];

    if (!token)
        return res.send(httpStatus.BAD_REQUEST, new Error("Provide an Access Token"));

    jwt.verify(token, config.app.secret , (err, decoded) => {

        if (err)
            return res.send(httpStatus.BAD_REQUEST, new Error("Invalid Access Token Provided"));

        req.user = { username: decoded.username };
    });

    return next();
}
