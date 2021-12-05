import keys from '../src/keys.js'
import assert from "assert"
import chai from "chai"
import {expect} from "chai"

// nominal
describe('keys(), Nominal Input', function() {
    it('Undefined value', function() {
        assert.deepEqual(keys('abc'), [ '0', '1', '2' ]);
    });
    it('NaN', function() {
        assert.deepEqual(keys(NaN), []);
    });
    it('Function', function() {
        function Foo() {
          this.a = 1
          this.b = 2
        }
        Foo.prototype.c = 3
        assert.deepEqual(keys(new Foo), ['a','b']);
    });
});

