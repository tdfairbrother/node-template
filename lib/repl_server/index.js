var net = require('net');
var repl = require('repl');
var createApp = require("_lib/main/create_app");
var config = require('_lib/config');

var appInstance;


var server = net.createServer(function (socket) {
    var options = {
        prompt: config.app.name+ " > ",
        input: socket,
        output: socket
    };

    var replServer = repl.start(options);

    replServer.context.app = appInstance;
    replServer.context.services = appInstance.services;
    replServer.context.env = process.env;
});


server.listen(config.repl.port, function() {
    createApp(function(err, app) {
        if (err) {
            throw err;
        }
        appInstance = app;
    });
});