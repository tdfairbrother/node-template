var repl = require('repl');

module.exports = function startRepl(promptText, app, socket) {
    var options = {
        prompt: promptText + " > "
    };

    if (socket) {
        options.input = socket;
        options.output = socket;
    }

    var replServer = repl.start(options);

    replServer.context.app = app;
    replServer.context.services = app.services;
    replServer.context.process = process;
};