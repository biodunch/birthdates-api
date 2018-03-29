"use strict";

const serviceLocator = require("app/lib/service_locator");

class AuthController {
    constructor(log, authService, httpSatus) {
        this.log = log;
        this.authService = authService;
        this.httpSatus = httpSatus;
    }

    basicLogin(req, res) {
        res.send(200, "Done")
    }

    create(req, res) {
        const { body } = req;
        this.authService
            .createUser(body)
            .then((user) => {
                res.send(this.httpSatus.OK, user);
            })
            .catch((err) => {
                this.log.error(`Error: ${JSON.stringify(err)}`);
                res.send(this.httpSatus.INTERNAL_SERVER_ERROR, err);
            });
    }

    get(req, res) {

    }

    listAll(req, res) {

    }

}

module.exports = AuthController;