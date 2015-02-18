var debug = require('debug')('plugin');

module.exports = function(options, imports, register){
    debug('loading...');

    register(null, {
        //Export services
    });
};