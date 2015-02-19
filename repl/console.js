var net = require("net");
var startRepl = require('./repl');
var createApp = require("_lib/main/create_app");
var config = require("_lib/config");
var name = config.app.name;

createApp(function(err, app) {
    if (err) {
        throw err;
    }
    startRepl(name, app);
});

