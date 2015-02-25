var config = require('_lib/config');

if (config.new_relic && config.new_relic.enabled) {
    require('newrelic');
}

if (process.env.NODE_ENV.match(/test|development/)){
    require('longjohn');
}

module.exports = [
    {
        packagePath:"node-architect-log",
        name: config.app.name,
        log_level: config.log.log_level
    },
    {
        packagePath:"_lib/plugin"
    },
    {
        packagePath:"_lib/error_handler",
        api_key: config.airbrake.api_key
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