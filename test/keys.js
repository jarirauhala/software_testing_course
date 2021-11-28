import keys from '../src/keys.js'
import assert from "assert"
import chai from "chai"
import {expect} from "chai"

describe('keys()', function() {
    it('undefined value', function() {
        assert.deepEqual(keys('abc'), [ '0', '1', '2' ]);
    });
});

describe('keys()', function() {
    it('NaN', function() {
        assert.deepEqual(keys(NaN), []);
    });
});

describe('keys()', function() {
    it('function', function() {
        function Foo() {
          this.a = 1
          this.b = 2
        }
        Foo.prototype.c = 3
        assert.deepEqual(keys(new Foo), ['a','b']);
    });
});

