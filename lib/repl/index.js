var net = require("net");
var repl = require("repl");
var createApp = require("_lib/main/create_app");
var config = require("_lib/config");

createApp(function(err, app) {
    if (err) {
        throw err;
    }

    var options = {
        prompt: config.app.name+ " > "
    };

    var replServer = repl.start(options);

    replServer.context.app = app;
    replServer.context.services = app.services;
});

