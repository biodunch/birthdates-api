const jwt = require("app/lib/restify-jwt");
const jwksClient = require('jwks-rsa')

const verifyToken = jwt({
    secret: jwksClient.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://biodunch.auth0.com/.well-known/jwks.json"
    }),
    audience: "birthdates-api",
    issuer: "https://biodunch.auth0.com/",
    algorithms: ["RS256"]
});

module.exports = verifyToken;