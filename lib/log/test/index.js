'use strict';

var sinon = require('sinon');
var expect = require('expect.js');
var proxyquire = require('proxyquire');

var log, debug, debugStub, logStub;

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
                log = services.log;
                debug = log('ns');
                done();
            });
        });

        it("sets up the debug module with the name of the app and the namespace", function(){
            expect(debugStub.calledWith('test-app:ns')).to.be(true);
        });

        it("returns a setLogLevel method", function(){
            expect(debug.setLogLevel).to.be.a('function');
        });

        it("returns a info method", function(){
            expect(debug.info).to.be.a('function');
        });

        it("returns a warn method", function(){
            expect(debug.warn).to.be.a('function');
        });

        it("returns a debug method", function(){
            expect(debug.debug).to.be.a('function');
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
                debug.setLogLevel('warn,debug,error');
                neverCalled('info');
            });

            it("restricts warn log", function(){
                debug.setLogLevel('info,debug,error');
                neverCalled('warn');
            });

            it("restricts debug log", function(){
                debug.setLogLevel('warn,info,error');
                neverCalled('debug');
            });

            it("restricts error log", function(){
                debug.setLogLevel('warn,info,debug');
                neverCalled('error');
            });
        });
    });


    function neverCalled(method) {
        debug[method]('hi');
        expect(logStub.calledOnce).to.be(false);
    }


    function callsTwice(method) {
        debug[method]('hi');
        expect(logStub.calledOnce).to.be(true);
        expect(logStub.calledWith('hi')).to.be(true);

        debug[method]('bye');
        expect(logStub.calledTwice).to.be(true);
        expect(logStub.calledWith('bye')).to.be(true);
    }

    function withArgs(method) {
        debug[method]('hi', { test:true }, 5235);
        expect(logStub.calledWith('hi', { test:true }, 5235)).to.be(true);
    }

});
