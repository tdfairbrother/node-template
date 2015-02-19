var debug = require('debug');

module.exports = function(options, imports, register){
    var currentLogLevel = options.log_level || 'warn,info,debug,error';
    var name = options.name || 'undefined';

    function allowed(level) {
        return currentLogLevel.indexOf(level) != -1;
    }

    register(null, {
        log: function(namespace) {
            var logger = debug(name + ':' + namespace);
            var slice = Array.prototype.slice;

            return {
                setLogLevel: function(level) {
                    currentLogLevel = level;
                },

                info: function() {
                    if (allowed('info')) {
                        logger.apply(this, slice.call(arguments));
                    }
                },

                warn: function(message) {
                    if (allowed('warn')) {
                        logger.apply(this, slice.call(arguments));
                    }
                },

                debug: function(message) {
                    if (allowed('debug')) {
                        logger.apply(this, slice.call(arguments));
                    }
                },

                error: function(message) {
                    if (allowed('error')) {
                        logger.apply(this, slice.call(arguments));
                    }
                }
            }
        }
    });
};