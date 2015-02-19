'use strict';

var sinon = require('sinon');
var expect = require('expect.js');
var format = require('../format');
var formatLogMessage = format.formatLogMessage;

describe('formatLogMessage', function(){

    it("[info] message", function(){
        expect(formatLogMessage('test message', 'info')).to.match(/\[info\].+test message/);
    });

    it("[warn] message", function(){
        expect(formatLogMessage('test message', 'warn')).to.match(/\[warn\].+test message/);
    });

    it("[debug] message", function(){
        expect(formatLogMessage('test message', 'debug')).to.match(/\[debug\].+test message/);
    });

    it("[error] message", function(){
        expect(formatLogMessage('test message', 'error')).to.match(/\[error\].+TEST MESSAGE/);
    });

    it("message", function(){
        expect(formatLogMessage('test message')).to.match(/test message/);
    });

});
