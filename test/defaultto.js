import defaultTo from '../src/defaultto.js'
import assert from "assert"
import chai from "chai"
import {expect} from "chai"

// nominal
describe('defaultto(), Nominal Input', function() {
    it('Positive integers', function() {
        assert.equal(defaultTo(4,1), 4);
    });
    it('Positive floats', function() {
        assert.equal(defaultTo(4.4,1.2), 4.4);
    });
    it('Negative integers', function() {
        assert.equal(defaultTo(-4,-1), -4);
    });
    it('Negative floats', function() {
        assert.equal(defaultTo(-4.4, -1.1), -4.4);
    });
    it('Null value', function() {
        assert.equal(defaultTo(null, 1), 1);
    });
    it('NaN value', function() {
        assert.equal(defaultTo(NaN, 1), 1);
    });
    it('Undefined value', function() {
        assert.equal(defaultTo(undefined, 1), 1);
    });
});
