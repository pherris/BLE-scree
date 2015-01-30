'use strict';

var Scanner = require('../src/scan');

/*globals Player:false, Song: false*/

describe("Scanner", function() {
  var scanner;

  beforeEach(function() {
    scanner = new Scanner();
  });

  it("should be an object", function() {
    expect(typeof scanner).toEqual('object');
  });
});
