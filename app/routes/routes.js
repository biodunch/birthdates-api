/**
 * @description Sets up the restify routes.
 */

"use strict";

const verifyToken = require("app/middleware/verify_token"),
    checkRole = require("app/middleware/check_role");

module.exports.register = (server, serviceLocator) => {

    // Auth Routes
    server.post(
        {
            path: "/users/basic-login",
            name: "User Login",
            version: "1.0.0"
        },
        serviceLocator.get('authController').basicLogin 
    );

    server.post(
        {
            path: "/users",
            name: "Create User",
            version: "1.0.0"
        },
        serviceLocator.get('authController').create
    );

    server.get(
        {
            path: "/users",
            name: "Get Users",
            version: "1.0.0"
        },
        serviceLocator.get('authController').listAll
    );

    server.get(
        {
            path: "/users/:username",
            name: "Get User",
            version: "1.0.0",
            validations: {
                params
            }
        },
        serviceLocator.get('authController').get
    );

    server.get(
        {
            path: "/show",
            name: "GIRL",
            version: "1.0.0"
        },
        verifyToken,
        (req, res, next) => res.send("welcome to Body101 api")
    );

    server.get(
        {
            path: "/admin",
            name: "Admin",
            version: "1.0.0"
        },
        verifyToken,
        checkRole,
        (req, res, next) => res.send("welcome to admin")
    );
};
