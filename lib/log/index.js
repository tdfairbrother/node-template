var formatLogMessage = require('./format').formatLogMessage;
var debug = require('debug');

module.exports = function(options, imports, register){
    var currentLogLevel = options.log_level || 'warn,info,debug,error';
    var name = options.name || 'undefined';

    function allowed(level) {
        return currentLogLevel.indexOf(level) != -1;
    }

    register(null, {
        log_settings: {
            setLogLevel: function(level) {
                currentLogLevel = level;
            }
        },

        log: function(namespace) {
            var logger = debug(name + ':' + namespace);

            function setupLog(logLevel) {
                return function(message) {
                    if (allowed(logLevel)) {
                        var args = Array.prototype.slice.call(arguments);
                        args[0] = formatLogMessage(message, logLevel);
                        logger.apply(this, args);
                    }
                }
            }

            return {
                info: setupLog('info'),
                warn: setupLog('warn'),
                debug: setupLog('debug'),
                error:  setupLog('error')
            }
        }
    });
};