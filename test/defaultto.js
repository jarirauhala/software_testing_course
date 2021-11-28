import defaultTo from '../src/defaultto.js'
import assert from "assert"
import chai from "chai"
import {expect} from "chai"

describe('defaultto()', function() {
    it('positive integers', function() {
        assert.equal(defaultTo(4,1), 4);
    });
});

describe('defaultto()', function() {
    it('positive floats', function() {
        assert.equal(defaultTo(4.4,1.2), 4.4);
    });
});

describe('defaultto()', function() {
    it('negative integers', function() {
        assert.equal(defaultTo(-4,-1), -4);
    });
});

describe('defaultto()', function() {
    it('negative floats', function() {
        assert.equal(defaultTo(-4.4, -1.1), -4.4);
    });
});

describe('defaultto()', function() {
    it('null value', function() {
        assert.equal(defaultTo(null, 1), 1);
    });
});

describe('defaultto()', function() {
    it('NaN value', function() {
        assert.equal(defaultTo(NaN, 1), 1);
    });
});

describe('defaultto()', function() {
    it('undefined value', function() {
        assert.equal(defaultTo(undefined, 1), 1);
    });
});
