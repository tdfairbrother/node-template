var debug = require('debug');

module.exports = function(options, imports, register){

    var log = debug(options.name);

    var exports = {
        log: log
    };

    register(null, exports);
};