module.exports = function(options, imports, register){
    var log = imports.log('routes');
    var app = imports.app;

    log.info('loading...');

    app.use('/ping', function(req, res) {
        var query = req.query;
        log.info('ping', query);
        log.warn('ping', query);
        log.error('ping', query);
        log.debug('ping', query);
        res.send('pong');
    });


    register(null, {});
};