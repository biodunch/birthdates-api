"use strict";

const serviceLocator = require("app/lib/service_locator"),
    config = require("app/configs/configs")();

serviceLocator.register("logger", () => {
    const logger = require("app/lib/logger").create(config.application_logging);

    return logger;
});

serviceLocator.register("httpStatus", () => {
    return require("http-status");
});

serviceLocator.register("shortid", () => {
    return require("shortid");
});

serviceLocator.register("mongoose", () => {
    const mongoose = require("mongoose");

    return mongoose;
});

serviceLocator.register("errs", () => {
    return require("restify-errors");
});

serviceLocator.register("birthdateService", (serviceLocator) => {
    const log = serviceLocator.get("logger");
    const mongoose = serviceLocator.get("mongoose");
    const httpStatus = serviceLocator.get("httpStatus");
    const errs = serviceLocator.get("errs");
    const BirthdateService = require("app/services/birthdate");

    return new BirthdateService(log, mongoose, httpStatus, errs);
});

serviceLocator.register("userService", (serviceLocator) => {
    const log = serviceLocator.get("logger");
    const mongoose = serviceLocator.get("mongoose");
    const httpStatus = serviceLocator.get("httpStatus");
    const errs = serviceLocator.get("errs");
    const UserService = require("app/services/user");
    
    return new UserService(log, mongoose, httpStatus, errs);
});

serviceLocator.register("birthdateController", (serviceLocator) => {
    const log = serviceLocator.get("logger");
    const httpStatus = serviceLocator.get("httpStatus");
    const birthdateService = serviceLocator.get("birthdateService");
    const BirthdateController = require("app/controllers/birthdate");

    return new BirthdateController(log, birthdateService, httpStatus);
});

serviceLocator.register("userController", (serviceLocator) => {
    const log = serviceLocator.get("logger");
    const httpStatus = serviceLocator.get("httpStatus");
    const userService = serviceLocator.get("userService");
    const UserController = require("app/controllers/user");

    return new UserController(log, userService, httpStatus);
});

module.exports = serviceLocator;
