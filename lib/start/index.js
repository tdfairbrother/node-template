module.exports = function(options, imports, register){
    imports.log('start').info('loading...');
    imports.server.start(register);
};