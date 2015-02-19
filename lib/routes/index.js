module.exports = function(options, imports, register){
    var log = imports.log('routes');
    var app = imports.app;

    log.info('loading...');

    app.use('/ping', function(req, res) {
        log.info('ping');
        res.send('pong');
    });


    register(null, {});
};