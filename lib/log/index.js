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

            function setupLog(logLevel) {
                return function() {
                    if (allowed(logLevel)) {
                        logger.apply(this, Array.prototype.slice.call(arguments));
                    }
                }
            }

            return {
                setLogLevel: function(level) {
                    currentLogLevel = level;
                },

                info: setupLog('info'),
                warn: setupLog('warn'),
                debug: setupLog('debug'),
                error:  setupLog('error')
            }
        }
    });
};