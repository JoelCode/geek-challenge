//<editor-fold desc="Imports">
'use strict';
const sinon = require('sinon');
const assert = require('assert');
const mocha = require('mocha');
const {Api} = require('./index');
const util = require('util');
//</editor-fold>

suite('Geektastic', function () {
  //<editor-fold desc="Setup">
  let stub;
  let api;
  setup(function () {
    api = new Api();
  });
  teardown(function () {
    if (stub && 'restore' in stub) {
      stub.restore();
    }

  });
  //</editor-fold>

  suite('base', function () {
    test('base', async function () {
      const res = await api.hello();
      console.log(util.inspect(res, false, null));
    }).timeout(5000);
  });

});