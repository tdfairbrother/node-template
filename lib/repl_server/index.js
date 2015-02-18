var net = require('net');
var repl = require('repl');
var debug = require('debug');

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
    replServer.context.process = process;
    replServer.context.debug = debug;
});


server.listen(config.repl.port, function() {
    createApp(function(err, app) {
        if (err) {
            throw err;
        }
        appInstance = app;
    });
});