'use strict';

const serviceLocator = require('app/lib/service_locator');

class BirthdateController {
    constructor(log, birthdateService, httpSatus) {
        this.log = log;
        this.birthdateService = birthdateService;
        this.httpSatus = httpSatus;
    }

    async create(req, res) {
        try {
            const { body } = req;
            const { username } = req.params;
            const result = await this.birthdateService.createBirthdate(
                username,
                body
            );
            if (!result instanceof Error)
                this.log.info('Birthdate Created Successfully');
            res.send(result);
        } catch (err) {
            this.log.error(`Error: ${err}`);
            res.send(this.httpSatus.INTERNAL_SERVER_ERROR, err);
        }
    }

    async listAll(req, res) {
        try {
            const { username } = req.params;
            const result = await this.birthdateService.getBirthdates(username);
            if (!result instanceof Error)
                this.log.info('Birthdate Created Successfully');
            res.send(result);
        } catch (err) {
            this.log.error(`Error: ${err}`);
            res.send(this.httpSatus.INTERNAL_SERVER_ERROR, err);
        }
    }
}

module.exports = BirthdateController;
