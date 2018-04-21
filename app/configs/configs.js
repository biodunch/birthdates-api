'use strict';

module.exports = () => ({
    app: {
        name: process.env.APP_NAME,
        port: process.env.PORT || 8000,
        environment: process.env.APPLICATION_ENV,
        logpath: process.env.LOG_PATH,
        secret: process.env.APP_SECRET
    },
    auth0: {
        jwks_url: process.env.JWKS_URL,
        jwt_aud: process.env.JWT_AUD,
        jwt_issuer: process.env.JWT_ISSUER
    },
    mongo: {
        port: process.env.DB_PORT,
        host: process.env.DB_HOST,
        name: process.env.DB_NAME
    },
    application_logging: {
        file: process.env.LOG_PATH,
        level: process.env.LOG_LEVEL || 'info',
        console: process.env.LOG_ENABLE_CONSOLE || true
    }
});
