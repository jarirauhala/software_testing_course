import add from '../src/add.js'
import assert from "assert"


describe('Array', function() {
    describe('#add()', function() {
      it('should sum the numbers', function() {
        assert.equal(add(2,3), 5);
      });
    });
  });
  