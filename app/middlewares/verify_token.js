"use strict";

const jwt = require("app/lib/restify-jwt");
const jwksClient = require("jwks-rsa");
const config = require("app/configs/configs")();

const verifyToken = jwt({
    secret: jwksClient.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: config.auth0.jwks_url
    }),
    audience: config.auth0.jwt_aud,
    issuer: config.auth0.jwt_issuer,
    algorithms: ["RS256"]
});

module.exports = verifyToken;
