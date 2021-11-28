import clamp from '../src/clamp.js'
import assert from "assert"
import chai from "chai"
import {expect} from "chai"

describe('clamp()', function() {
    it('number below lower bound, integers', function() {
        assert.equal(clamp(-10, -5, 5), -5);
    });
});

describe('clamp()', function() {
    it('number above upper bound, integers', function() {
        assert.equal(clamp(10, -5, 5), 5);
    });
});

describe('clamp()', function() {
    it('number within bounds, integers', function() {
        assert.equal(clamp(0, -5, 5), 0);
    });
});


describe('clamp()', function() {
    it('number below lower bound, floats', function() {
        assert.equal(clamp(-10.5, -5.5, 5.5), -5.5);
    });
});

describe('clamp()', function() {
    it('number above upper bound, floats', function() {
        assert.equal(clamp(10.5, -5.5, 5.5), 5.5);
    });
});

describe('clamp()', function() {
    it('number within bounds, floats', function() {
        assert.equal(clamp(0.5, -5.5, 5.5), 0.5);
    });
});



describe('clamp()', function() {
    it('NaN number', function() {
        expect(function(){clamp(NaN, -5, 5)}).to.throw(TypeError);
    });
});

describe('clamp()', function() {
    it('NaN lower bound', function() {
        expect(function(){clamp(10, NaN, 5)}).to.throw(TypeError);
    });
});

describe('clamp()', function() {
    it('NaN upper bound', function() {
        expect(function(){clamp(0, -5, NaN)}).to.throw(TypeError);
    });
});


describe('clamp()', function() {
    it('char number', function() {
        expect(function(){clamp('a', -5, 5)}).to.throw(TypeError);
    });
});

describe('clamp()', function() {
    it('char lower bound', function() {
        expect(function(){clamp(10, 'a', 5)}).to.throw(TypeError);
    });
});

describe('clamp()', function() {
    it('char upper bound', function() {
        expect(function(){clamp(0, -5, 'a')}).to.throw(TypeError);
    });
});
