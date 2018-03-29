"use strict";

const serviceLocator = require("app/lib/service_locator"),
    config = require("app/configs/configs")();

serviceLocator.register("logger", () => {
    const logger = require("app/lib/logger").create(config.application_logging);

    return logger;
});

serviceLocator.register("shortid", () => {
    return require("shortid");
});

serviceLocator.register("mongoose", () => {
    const mongoose = require("mongoose");

    return mongoose;
});

serviceLocator.register("jwt", () => {
    const jwt = require("jsonwebtoken");

    return jwt;
});

serviceLocator.register('authController', () => {
    const log = serviceLocator.get('logger');
    const authService = '';
    const httpStatus = require('http-status');
    const AuthController = require('app/controllers/Auth')

    return new AuthController(log, authService, httpStatus)
})


module.exports = serviceLocator;
