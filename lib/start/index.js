var debug = require('debug')('start');

module.exports = function(options, imports, register){
    debug("loading...");
    imports.server.start(register);
};