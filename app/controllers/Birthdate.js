"use strict";

const serviceLocator = require("app/lib/service_locator");

class BirthdateController {
    constructor(log, birthdateService, httpSatus) {
        this.log = log;
        this.birthdateService = birthdateService;
        this.httpSatus = httpSatus;
    }
    
    async create(req, res) {
        const { body } = req;
        const result = await this.birthdateService.createBirthdate(body);
        if(!result instanceof Error)
            this.log.info("Birthdate Created Successfully");
        res.send(result);
    }

    async get(req, res) {}

    async listAll(req, res) {}
}

module.exports = BirthdateController;
