'use strict';

class BirthdateService {
    constructor(log, mongoose, httpStatus, errs) {
        this.log = log;
        this.mongoose = mongoose;
        this.httpStatus = httpStatus;
        this.errs = errs;
    }

    async createBirthdate(username, body) {
        
    }

    async getBirthdates(username) {

    }
}

module.exports = BirthdateService;
