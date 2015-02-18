'use strict';

var sinon = require('sinon');
var expect = require('expect.js');
var plugin = require('../index');

describe('plugin', function(){

    before(function(done){
        plugin({
        //Options
        }, {
        //Imports
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
