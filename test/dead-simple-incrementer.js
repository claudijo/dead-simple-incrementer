var assert = require('assert');
var incrementer = require('..');

describe('Incrementer', function() {
  var inc = null;

  beforeEach(function() {
    inc = incrementer();
  });

  afterEach(function() {
    inc = null;
  });

  it('should start with 1', function() {
    assert(inc.next() === 1);
  });

  it('should increment by one', function() {
    assert(inc.next() === 1);
    assert(inc.next() === 2);
    assert(inc.next() === 3);
  });
});