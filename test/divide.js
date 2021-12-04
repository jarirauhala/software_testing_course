import divide from '../src/divide.js'
import assert from "assert"
import chai from "chai"
import {expect} from "chai"

// nominal arrays
describe('divide(), Nominal Input', function() {
    it('Positive integer by positive integer, into integer', function() {
        assert.equal(divide(6,3), 2); 
        assert.equal(divide(6,6), 1); 
    });
    it('Positive integer by positive integer, into float', function() {
        assert.equal(divide(6,4), 1.5); 
    });
    it('Positive integer by negative integer, into integer', function() {
        assert.equal(divide(30,-3), -10);
        assert.equal(divide(-8,2), -4);  
    });
    it('Positive integer by negative integer, into float', function() {
        assert.equal(divide(30,-12), -2.5);
        assert.equal(divide(-6,4), -1.5);  
    });
    it('Negative integer by negative integer, into integer', function() {
        assert.equal(divide(-10,-5), 2); 
        assert.equal(divide(-10,-10), 1); 
    });
    it('Negative integer by negative integer, into float', function() {
        assert.equal(divide(-10,-4), 2.5); 
    });
    it('Zero as dividend', function() {
        assert.equal(divide(0,15), 0); 
    });
});

// erroneous arrays
describe('divide(), Erroneous Input', function() {
    it('Should throw when one of the arguments is a char', function() {
        expect(function(){divide('b',2)}).to.throw()
        expect(function(){divide(2,'b')}).to.throw()
    });
    it('Should throw when one of the arguments is a string', function() {
        expect(function(){divide("String",4)}).to.throw()
        expect(function(){divide(4,"String")}).to.throw()
    });
    it('Should throw when one of the arguments is null', function() {
        expect(function(){divide(null,3)}).to.throw()
        expect(function(){divide(3,null)}).to.throw()
    });
    it('Should throw when one of the arguments is a float', function() {
        expect(function(){divide(2.5,1)}).to.throw()
        expect(function(){divide(1,2.5)}).to.throw()
    });
    it('Should throw when one of the arguments is a function', function() {
        expect(function(){divide(5,function(){return 0})}).to.throw()
        expect(function(){divide(function(){return 0},5)}).to.throw()
    });
    it('Should throw when one of the arguments is an array', function() {
        expect(function(){divide(5,[1])}).to.throw()
        expect(function(){divide([1],5)}).to.throw()
    });
});