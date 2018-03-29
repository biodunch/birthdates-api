'use strict';

const bcrypt = require('bcrypt-nodejs'),
    config = require('app/configs/configs'),
    serviceLocator = require('app/lib/service_locator'),
    mongoose = serviceLocator.get('mongoose'),
    jwt = serviceLocator.get('jwt');

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        trim: true,
        required: true
    },
    last_name: {
        type: String,
        trim: true,
        required: true
    },
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
        required: true
    },
    avatar: {
        type: String
    },
    gender: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    }
},
{
    timestamps: true
});

userSchema.methods.hashPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

userSchema.methods.compareHash = function(password) {
    return bcrypt.compareSync(password, this.password)
}

userSchema.methods.generateToken = function() {
    const token = jwt.sign(
        {
            username: this.username, 
            password: this.password
        }, 
        config.app.secret, 
        {
            expiresIn: "24h"
        }
    );
    return token;
}

module.exports = mongoose.model('Users', schema);