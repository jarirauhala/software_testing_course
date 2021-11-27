import ceil from '../src/ceil.js'
import assert from "assert"
import chai from "chai"
import {expect} from "chai"

// positive numbers
describe('ceil()', function() {
    it('positive number, no precision', function() {
        assert.equal(ceil(3.6), 4);
    });
});

describe('ceil()', function() {
    it('positive number, positive precision', function() {
        assert.equal(ceil(3.001, 2), 3.01);
    });
});

describe('ceil()', function() {
    it('positive number, negative precision', function() {
        assert.equal(ceil(5030, -2), 5100);
    });
});

// negative number
describe('ceil()', function() {
    it('negative number, no precision', function() {
        assert.equal(ceil(-3.6), -3);
    });
});

describe('ceil()', function() {
    it('negative number, positive precision', function() {
        assert.equal(ceil(-3.001, 2), -3);
    });
});

describe('ceil()', function() {
    it('negative number, negative precision', function() {
        assert.equal(ceil(-5030, -2), -5000);
    });
});


// incorrect inputs
describe('ceil()', function() {
    it('char precision', function() {
        expect(function(){ceil(3, 'a')}).to.throw(TypeError)
    });
});

describe('ceil()', function() {
    it('float precision', function() {
        expect(function(){ceil(3, 4.45345)}).to.throw(TypeError)
    });
});

describe('ceil()', function() {
    it('undefined number', function() {
        console.log(ceil(undefined))
        expect(function(){ceil(undefined)}).to.throw(TypeError)
    });
});
