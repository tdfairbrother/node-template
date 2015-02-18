'use strict';

var expect = require('expect.js');
var sinon = require('sinon');
var createApp = require('../create_app');
var services;

describe('main', function(){

    beforeEach(function(done){
        createApp(function(err, app) {
            if (err) throw err;

            // Access to services
            services  = app.services;

            done();
        });
    });

    describe('test something', function() {

        it('works', function(done) {
            done();
        });

    });
});