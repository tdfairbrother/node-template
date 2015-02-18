var config = require('_lib/config');

if (config.new_relic && config.new_relic.enabled){
    require('newrelic');
}

module.exports = [
    {
        packagePath:"_lib/plugin"
    },
    {
        packagePath:"_lib/error_handler",
        apiKey: config.airbrake.api_key
    },
    {
        packagePath:"_lib/server",
        port: config.server.port,
        log_level: config.server.log_level
    },
    {
        packagePath:"_lib/routes"
    },
    {
        packagePath:"_lib/start"
    }
]