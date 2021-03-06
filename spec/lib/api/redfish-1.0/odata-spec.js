// Copyright 2017, EMC, Inc.
/* jshint node:true */

'use strict';

describe('Redfish odata', function () {
    before('start HTTP server', function () {
        this.timeout(10000);
        return helper.startServer([]);
    });

    afterEach('tear down mocks', function () {
    });

    after('stop HTTP server', function () {
        return helper.stopServer();
    });

    it('should return the correct odata', function () {
        return helper.request().get('/redfish/v1/odata')
            .expect('Content-Type', "application/json; charset=utf-8")
            .expect(200);
    });

});

