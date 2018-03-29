'use strict';

const serviceLocator = require("app/lib/service_locator");

class Database {

    constructor(host, port, name){
        this.mongoose = serviceLocator.get('mongoose');
        this._connect(host, port, name);
    }

    _connect(host, port, name) {
        this.mongoose.Promise = global.Promise;
        this.mongoose.connect(`mongodb://mongo:27017/${name}`);
        const connection = this.mongoose.connection;
        connection.on('connected', () => console.log("Connection Successful"));  
        connection.on('error', (err) => console.log("Connection Failed" + err));  
        connection.on('disconnected', () => console.log("Connection Disconnected")); 
        process.on('SIGINT', () => { 
            connection.close(); 
            console.log("Connection closed due to NodeJs process termination");
            process.exit(0) });

        // create Schemas
        // require('../models/users');
        // require('../models/stocks');
    }
}

module.exports = Database;