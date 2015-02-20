'use strict';

var sinon = require('sinon');
var expect = require('expect.js');
var plugin = require('../index');
var log = require('node-architect-log/mock');


describe('plugin', function(){

    before(function(done){
        plugin({
        //Options
        }, {
            //Imports
            log:log
        },
        //Register
        done);
    });

    describe('test something', function(){

        beforeEach(function() {

        });

        it("works", function(done){
            done();
        });
    });

});
