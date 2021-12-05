import ceil from '../src/ceil.js'
import assert from "assert"
import chai from "chai"
import {expect} from "chai"

// nominal
describe('ceil(), Nominal Input', function() {
    it('Positive number, no precision', function() {
        assert.equal(ceil(3.6), 4);
    });
    it('Positive number, positive precision', function() {
        assert.equal(ceil(3.001, 2), 3.01);
    });
    it('Positive number, negative precision', function() {
        assert.equal(ceil(5030, -2), 5100);
    });
    it('Negative number, no precision', function() {
        assert.equal(ceil(-3.6), -3);
    });
    it('Negative number, positive precision', function() {
        assert.equal(ceil(-3.001, 2), -3);
    });
    it('Negative number, negative precision', function() {
        assert.equal(ceil(-5030, -2), -5000);
    });
});


// erroneous
describe('ceil(), Erroneous Input', function() {
    it('Should throw when one argument is a char', function() {
        expect(function(){ceil(3, 'a')}).to.throw(TypeError)
    });
    it('Should throw when float precision is critical', function() {
        expect(function(){ceil(3, 4.45345)}).to.throw(TypeError)
    });
    it('Should throw when one argument is undefined', function() {
        console.log(ceil(undefined))
        expect(function(){ceil(undefined)}).to.throw(TypeError)
    });
});
