var path = require('path');
var architect = require("architect");
var configPath = path.join(__dirname, "plugins.js");
var config = architect.loadConfig(configPath);

module.exports = function(callback) {
    return architect.createApp(config, function(err, app) {
        app.services.log('started');
        if (callback) {
            return callback(err, app);
        }
    });
};

