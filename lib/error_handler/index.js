var debug = require('debug')('error_handler');

module.exports = function setup(options, imports, register) {
    var airbrake;

    // Only enable if there is an api key.
    if (options.api_key) {
        debug("airbrake loaded");
        airbrake = require('airbrake').createClient(options.api_key);
        airbrake.handleExceptions();
    } else {
        airbrake = false;
    }

    var errorHandler = {
        notify:function(message){
            if(airbrake){
                airbrake.notify(message);
            }
        }
    }

    register(null, {
        error_handler: errorHandler
    });
}