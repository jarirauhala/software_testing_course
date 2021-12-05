import add from '../src/add.js'
import assert from "assert"
import chai from "chai"
import {expect} from "chai"


// nominal
describe('add(), Nominal Input', function() {
    it('Positive integers', function() {
        assert.equal(add(2,3), 5);
    });
    it('Negative integers', function() {
        assert.equal(add(2,3), 5);
    });
    it('Negative and positive integer', function() {
        assert.equal(add(-2,3), 1);
    });
    it('Positive and negative integer', function() {
        assert.equal(add(2,-3), -1);
    });
    it('Integer and zero', function() {
        assert.equal(add(3,0), 3);
    });
    it('Zero and integer', function() {
        assert.equal(add(0,3), 3);
    });
    it('Positive floats', function() {
        assert.equal(add(2.0,3.0), 5.0);
    });
    it('Negative floats', function() {
        assert.equal(add(2.0,3.0), 5.0);
    });
    it('Negative and positive float', function() {
        assert.equal(add(-2.0,3.0), 1.0);
    });
    it('Positive and negative float', function() {
        assert.equal(add(2.0,-3.0), -1.0);
    });
    it('Float and zero', function() {
        assert.equal(add(3.0,0), 3.0);
    });
    it('Zero and float', function() {
        assert.equal(add(0,3.0), 3.0);
    });
});


// erroneous
describe('add(), Erroneous Input', function() {
    it('Should throw when one argument is a char', function() {
        expect(function(){add('a',3.0)}).to.throw(TypeError)
        expect(function(){add(3.0,'a')}).to.throw(TypeError)
        expect(function(){add('b','a')}).to.throw(TypeError)
        expect(function(){add(3,'a')}).to.throw(TypeError)
        expect(function(){add('a',3)}).to.throw(TypeError)
    });
    it('Should throw with large numbers', function() {
        expect(function(){
            add(30000000000000000000000000000000000000000000000000000,2000000000000000000000000000000000000000)
        }).to.throw(RangeError)
    });
    it('Should throw with small numbers', function() {
        expect(function(){
            add(0.000000000000000000000000000000000000000000000000000000003,0.000000000000000000000000000000000000000000001)
        }).to.throw(RangeError)
    });
});