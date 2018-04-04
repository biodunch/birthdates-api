"use strict";

const serviceLocator = require("app/lib/service_locator");

class UserController {
    constructor(log, userService, httpSatus) {
        this.log = log;
        this.userService = userService;
        this.httpSatus = httpSatus;
    }

    async create(req, res) {
        const { body } = req;
        const result = await this.userService.createUser(body);
        if (result instanceof Error)
            this.log.info("An error occured creating user" + result);
        else this.log.info("User Created Successfully");
        res.send(result);
    }

    async get(req, res) {
        const { username } = req.params;
        const result = await this.userService.getUser(username);
        if (result instanceof Error)
            this.log.info("An error occured creating user" + result);
        else this.log.info("User fetched Successfully");
        res.send(result);
    }

    async listAll(req, res) {}
}

module.exports = UserController;
