'use strict';

var sinon = require('sinon');
var expect = require('expect.js');
var proxyquire = require('proxyquire');
var formatLogMessage = require('../format').formatLogMessage;

var log, settings, debugStub, logStub;

describe('log plugin', function(){

    describe('.log(namespace)', function(){

        beforeEach(function(done) {
            logStub = sinon.stub();
            debugStub = sinon.stub().returns(logStub);

            var plugin = proxyquire('../index', {
                debug: debugStub
            });

            plugin({
                //Options
                name: 'test-app'
            }, {
                //Imports

            }, function(err, services) {
                settings = services.log_settings;
                log = services.log('ns');
                done();
            });
        });

        it("sets up the debug module with the name of the app and the namespace", function(){
            expect(debugStub.calledWith('test-app:ns')).to.be(true);
        });

        it("returns a setLogLevel method", function(){
            expect(settings.setLogLevel).to.be.a('function');
        });

        it("returns a info method", function(){
            expect(log.info).to.be.a('function');
        });

        it("returns a warn method", function(){
            expect(log.warn).to.be.a('function');
        });

        it("returns a debug method", function(){
            expect(log.debug).to.be.a('function');
        });

        describe('#info', function() {
            it("calls debug module callback with the message", function(){
                callsTwice('info');
            });

            it("calls debug module callback with the args", function(){
                withArgs('info');
            });
        });

        describe('#warn', function() {
            it("calls debug module callback with the message", function(){
                callsTwice('warn');
            });

            it("calls debug module callback with the args", function(){
                withArgs('warn');
            });
        });

        describe('#debug', function() {
            it("calls debug module callback with the message", function(){
                callsTwice('debug');
            });

            it("calls debug module callback with the args", function(){
                withArgs('debug');
            });
        });

        describe('#error', function() {
            it("calls debug module callback with the message", function(){
                callsTwice('error');
            });

            it("calls debug module callback with the args", function(){
                withArgs('error');
            });
        });

        describe('#setLogLevel', function() {
            it("restricts info log", function(){
                settings.setLogLevel('warn,debug,error');
                neverCalled('info');
            });

            it("restricts warn log", function(){
                settings.setLogLevel('info,debug,error');
                neverCalled('warn');
            });

            it("restricts debug log", function(){
                settings.setLogLevel('warn,info,error');
                neverCalled('debug');
            });

            it("restricts error log", function(){
                settings.setLogLevel('warn,info,debug');
                neverCalled('error');
            });
        });
    });


    function neverCalled(method) {
        log[method]('hi');
        expect(logStub.calledOnce).to.be(false);
    }


    function callsTwice(method) {
        var formattedMsg = formatLogMessage('hi', method);
        log[method]('hi');
        expect(logStub.calledOnce).to.be(true);
        expect(logStub.calledWith(formattedMsg)).to.be(true);

        formattedMsg = formatLogMessage('bye', method);
        log[method]('bye');
        expect(logStub.calledTwice).to.be(true);
        expect(logStub.calledWith(formattedMsg)).to.be(true);
    }

    function withArgs(method) {
        var formattedMsg = formatLogMessage('hi', method);
        log[method]('hi', { test:true }, 5235);
        expect(logStub.calledWith(formattedMsg, { test:true }, 5235)).to.be(true);
    }

});
