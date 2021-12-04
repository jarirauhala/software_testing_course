import drop from '../src/drop.js'
import assert from "assert"
import chai from "chai"
import {expect} from "chai"

// nominal
describe('drop(), Nominal Input', function() {
    it('Populated array with default value', function() {
        assert.deepEqual(drop([1,2,3]), [2,3]); 
        assert.deepEqual(drop([1]), []); 
    });
    it('Populated array with zero', function() {
        assert.deepEqual(drop([1,2,3],0), [1,2,3]); 
    });
    it('Populated array with an integer greater than 1', function() {
        assert.deepEqual(drop([1,2,3],2), [3]); 
        assert.deepEqual(drop([1,2,3],3), []); 
        assert.deepEqual(drop([1,2,3],4), []); 
    });
    it('Emtpy array', function() {
        assert.deepEqual(drop([]), []); 
        assert.deepEqual(drop([],2), []); 
    });
});

// erroneous 
describe('drop(), Erroneous Input', function() {
    it('Should throw when first input is not an array', function() {
        expect(function(){drop('a')}).to.throw()
        expect(function(){drop(1)}).to.throw()
        expect(function(){drop("String")}).to.throw()
        expect(function(){drop(null)}).to.throw()
        expect(function(){drop(function(){return 0})}).to.throw()
    });
    it('Should throw when second input is not zero or a positive integer', function() {
        expect(function(){drop([1,2,3], -5)}).to.throw()
        expect(function(){drop([1,2,3], 'a')}).to.throw()
        expect(function(){drop([1,2,3], 1)}).to.throw()
        expect(function(){drop([1,2,3], "String")}).to.throw()
        expect(function(){drop([1,2,3], null)}).to.throw()
        expect(function(){drop([1,2,3], function(){return 0})}).to.throw()
    });
});