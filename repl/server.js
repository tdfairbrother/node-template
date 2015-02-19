var net = require('net');
var createApp = require("_lib/main/create_app");
var startRepl = require('./repl');
var config = require('_lib/config');

var name = config.app.name;
var port = config.repl.port;
var appInstance;

var server = net.createServer(function(socket) {
    startRepl(name, appInstance, socket);
});

server.listen(port, function() {
    createApp(function(err, app) {
        if (err) {
            throw err;
        }
        app.services.log.info('repl-server ready on port ' + port);
        appInstance = app;
    });
});