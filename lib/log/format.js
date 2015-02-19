var chalk = require('chalk');

var warnBackground = chalk.bgBlack;
var warnColor = chalk.red;
var errorBackground = chalk.red;
var errorColor = chalk.bgWhite;
var gray = chalk.gray;
var bold = chalk.bold;

function warn(text) {
    return warnBackground(
        warnColor(
            bold(text)));
}

function error(text) {
    return errorBackground(
        errorColor(
            bold( text )));
}

function info(text) {
    return gray(text);
}

function debug(text) {
    return bold(text);
}

var warnType = warn('[warn]');
var errorType = error('[error]');
var infoType = info('[info]');
var debugType = debug('[debug]');

exports.formatLogMessage = function(message, logLevel) {

    switch(logLevel) {
        case 'info':
            return [infoType, gray(message)].join(' ');
            break;
        case 'warn':
            return [warnType, message].join(' ');
            break;
        case 'debug':
            return [debugType, message].join(' ');
            break;
        case 'error':
            return [errorType, message.toUpperCase() ].join(' ');
            break;
        default:
            return message;
    }
}
