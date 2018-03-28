'use strict';

const mongoose = require('mongoose')

class Database {

    constructor(host, port, name){
        this._connect(host, port, name);
    }

    _connect(host, port, name) {
        mongoose.Promise = global.Promise;
        mongoose.connect(`mongodb://mongo:27017/${name}`);
        const connection = mongoose.connection;
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