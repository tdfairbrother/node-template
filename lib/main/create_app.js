var path = require('path');
var architect = require("architect");
var debug = require('debug')('app');
var configPath = path.join(__dirname, "plugins.js");
var config = architect.loadConfig(configPath);

module.exports = function(callback) {
    debug('loading...');
    return architect.createApp(config, function(err, app) {
        debug('started');
        if (callback) {
            return callback(err, app);
        }
    });
};

