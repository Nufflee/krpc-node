'use strict';
var chai = require('chai');
var dirtyChai = require('dirty-chai');
chai.use(dirtyChai);

global.chai = chai;
global.expect = chai.expect;
global.assert = chai.assert;
global.should = chai.should();

process.on('uncaughtException', function (err) {
    console.error('Uncaught Exception',err, err.stack);
    throw err;
});