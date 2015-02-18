var debug = require('debug')('plugin');

module.exports = function(options, imports, register){
    debug('loaded');

    register(null, {
        //Export services
    });
};