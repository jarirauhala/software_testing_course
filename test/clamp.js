import clamp from '../src/clamp.js'
import assert from "assert"
import chai from "chai"
import {expect} from "chai"

// nominal
describe('clamp(), Nominal Input', function() {
    it('number below lower bound, integers', function() {
        assert.equal(clamp(-10, -5, 5), -5);
    });
    it('number above upper bound, integers', function() {
        assert.equal(clamp(10, -5, 5), 5);
    });
    it('number within bounds, integers', function() {
        assert.equal(clamp(0, -5, 5), 0);
    });
    it('number below lower bound, floats', function() {
        assert.equal(clamp(-10.5, -5.5, 5.5), -5.5);
    });
    it('number above upper bound, floats', function() {
        assert.equal(clamp(10.5, -5.5, 5.5), 5.5);
    });
    it('number within bounds, floats', function() {
        assert.equal(clamp(0.5, -5.5, 5.5), 0.5);
    });
});


// erroneous
describe('clamp(), Erroneous Input', function() {
    it('Should throw when the first argument is NaN', function() {
        expect(function(){clamp(NaN, -5, 5)}).to.throw(TypeError);
    });
    it('Should throw when the lower bound is NaN', function() {
        expect(function(){clamp(10, NaN, 5)}).to.throw(TypeError);
    });
    it('Should throw when the upper bound is NaN', function() {
        expect(function(){clamp(0, -5, NaN)}).to.throw(TypeError);
    });
    it('Should throw when the first argument is a char', function() {
        expect(function(){clamp('a', -5, 5)}).to.throw(TypeError);
    });
    it('Should throw when the lower bound is a char', function() {
        expect(function(){clamp(10, 'a', 5)}).to.throw(TypeError);
    });
    it('Should throw when the upper bound is a char', function() {
        expect(function(){clamp(0, -5, 'a')}).to.throw(TypeError);
    });
});
