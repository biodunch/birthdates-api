/**
 * @description Sets up the restify routes.
 */

"use strict";

const verifyToken = require("app/middlewares/verify_token");

module.exports.register = (server, serviceLocator) => {

    server.post(
        {
            path: "/users",
            name: "Create User",
            version: "1.0.0",
            validation: {
                body: require("app/validations/create_user")
            }
        },
        (req, res, next) =>
            serviceLocator.get("userController").create(req, res, next)
    );

    server.get(
        {
            path: "/users/:username",
            name: "Get User",
            version: "1.0.0",
            validation: {
                params: require("app/validations/get_user")
            }
        },
        verifyToken,
        (req, res, next) =>
            serviceLocator.get("userController").get(req, res, next)
    );

    server.get(
        {
            path: "/birthdates/:username",
            name: "Get Birthdates",
            version: "1.0.0",
            validation: {
                params: require("app/validations/get_birthdates")
            }
        },
        verifyToken,
        (req, res, next) =>
            serviceLocator.get("birthdateController").get(req, res, next)
    );

    server.post(
        {
            path: "/birthdates/:username",
            name: "Create Birthdate",
            version: "1.0.0",
            validation: {
                body: require("app/validations/create_birthdates")
            }
        },
        verifyToken,
        (req, res, next) =>
            serviceLocator.get("birthdateController").create(req, res, next)
    );
};
