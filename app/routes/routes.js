/**
 * @description Sets up the restify routes.
 */

"use strict";

const catchErrors = require("app/middleware/catch_errors");

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
            catchErrors(
                serviceLocator.get("userController").create(req, res, next)
            )
    );

    server.get(
        {
            path: "/users/:username",
            name: "Get User",
            version: "1.0.0"
        },
        (req, res, next) =>
            catchErrors(
                serviceLocator.get("userController").get(req, res, next)
            )
    );

    server.get(
        {
            path: "/birthdates/:username",
            name: "Get Birthdates",
            version: "1.0.0"
        },
        (req, res, next) =>
            catchErrors(
                serviceLocator
                    .get("birthdateController")
                    .listAll(req, res, next)
            )
    );

    server.post(
        {
            path: "/birthdates/:username",
            name: "Create Birthdate",
            version: "1.0.0"
        },
        (req, res, next) =>
            catchErrors(
                serviceLocator
                    .get("birthdateController")
                    .listAll(req, res, next)
            )
    );
};
