var debug = require('debug')('plugin');

module.exports = function(options, imports, register){
    debug('started');

    register(null, {
        //Export services
    });
};