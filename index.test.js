'use strict';

const sinon = require('sinon');
const assert = require('assert');
const mocha = require('mocha');
const {Api} = require('./index');
const util = require('util');

describe('Geektastic', function () {
  let stub;
  let api;
  setup(function () {
    api = new Api();
  });

  teardown(function () {
    stub.restore();
  });

  describe('Main Test', function () {
    it('Main Test', async function () {
      const res = api.hello();

      console.log(util.inspect(res, false, null));


    }).timeout(20000);
  });
});
