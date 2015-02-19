var express = require('express');
var morgan = require('morgan');
var app = express();

module.exports = function(options, imports, register){
    var log = imports.log('server');

    log.info('loading...');

    var errorMiddleware = require('./error_middleware')(imports.error_handler);

    if (process.env.NODE_ENV != 'test') {
        app.use(morgan(options.log_level));
    }

    function start(callback) {
        app.use(errorMiddleware);
        this.instance = app.listen(options.port, function(err, socket) {
            if (err) {
                return callback(err);
            }
            log.info('ready on port %s', options.port);
            callback(null, socket);
        });

    }

    var server = {
        start:start,
        instance: false
    };

    register(null, {
        app:app,
        server:server
    });
};