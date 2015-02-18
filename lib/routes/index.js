module.exports = function(options, imports, register){
    imports.log('routes:loading...');

    var app = imports.app;

    app.use('/ping', function(req, res) {
        imports.log('ping');
        res.send('pong');
    });


    register(null, {});
};