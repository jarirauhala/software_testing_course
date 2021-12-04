import difference from '../src/difference.js'
import assert from "assert"
import chai from "chai"
import {expect} from "chai"

// nominal arrays
describe('difference(), Nominal Input', function() {
    it('Second array is a subset', function() {
        assert.deepEqual(difference([2,1],[2]), [1]); 
    });
    it('First array is a subset', function() {
        assert.deepEqual(difference([2],[2,1]), []);
    });
    it('Two intersecting arrays', function() {
        assert.deepEqual(difference([4,2],[2,3]), [4]);
    });
    it('Two disjoint arrays', function() {
        assert.deepEqual(difference([4,2],[1,5]), [4,2]);
    });
    it('First array is empty', function() {
        assert.deepEqual(difference([],[1,5]), []);
    });
    it('Second array is empty', function() {
        assert.deepEqual(difference([1,5],[]), [1,5]);
    });
    it('Both arrays are empty', function() {
        assert.deepEqual(difference([],[]), []);
    });
});

// erroneous arrays
describe('difference(), Erroneous Input', function() {
    it('Should throw when one of the arguments is a char', function() {
        expect(function(){difference('b',[1,2])}).to.throw()
        expect(function(){difference([1,2],'b')}).to.throw()
    });
    it('Should throw when one of the arguments is a string', function() {
        expect(function(){difference("String",[1,2])}).to.throw()
        expect(function(){difference([1,2],"String")}).to.throw()
    });
    it('Should throw when one of the arguments is null', function() {
        expect(function(){difference(null,[1,2])}).to.throw()
        expect(function(){difference([1,2],null)}).to.throw()
    });
    it('Should throw when one of the arguments is an integer', function() {
        expect(function(){difference([1,2],1)}).to.throw()
        expect(function(){difference(1,[1,2])}).to.throw()
    });
    it('Should throw when one of the arguments is an a function', function() {
        expect(function(){difference([1,2],function(){return 0})}).to.throw()
        expect(function(){difference(function(){return 0},[1,2])}).to.throw()
    });
});


