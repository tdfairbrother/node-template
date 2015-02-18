var express = require('express');
var morgan = require('morgan');
var debug = require('debug')('server');
var app = express();

module.exports = function(options, imports, register){
    debug("loading...");

    var errorMiddleware = require('./error_middleware')(imports.error_handler);

    if (process.env.NODE_ENV != 'test') {
        app.use(morgan(options.log_level));
    }

    var server = {
        start: function(callback) {
            app.use(errorMiddleware);
            this.instance = app.listen(options.port, function(err, socket) {
                if (err) {
                    return callback(err);
                }
                debug("server ready on port %s", options.port);
                callback(null, socket);
            });

        },
        instance: false
    };

    register(null, {
        app:app,
        server:server
    });
};