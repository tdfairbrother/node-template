var debug = require('debug')('routes');

module.exports = function(options, imports, register){
    debug('loading...');

    var app = imports.app;

    app.use('/ping', function(req, res) {
        res.send('pong');
    });


    register(null, {});
};