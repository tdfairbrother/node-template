var createApp = require("_lib/main/create_app");
var repl = require("repl");
var config = require("_lib/config");

createApp(function(err, app) {
    if (err) {
        throw err;
    }

    var replServer = repl.start({
        prompt: config.app.name+ " > "
    });

    replServer.context.app = app;
    replServer.context.services = app.services;
});

