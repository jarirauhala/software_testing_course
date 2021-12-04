import map from '../src/map.js'
import assert from "assert"
import chai from "chai"
import {expect} from "chai"

const foo = function square(n){return n*n}
// nominal
describe('map(), Nominal Input', function() {
    it('Valid array and function', function() {
        assert.deepEqual(map([4,5], foo), [16,25]); 
    });
    it('Empty array and valid function', function() {
        assert.deepEqual(map([], foo), []); 
    });
    it('Valid array and empty function', function() {
        assert.deepEqual(map([3,4], function(){}), [undefined]); 
    });
});

// erroneous 
describe('map(), Erroneous Input', function() {
    it('Should throw when first argument is of inappropriate type', function() {
        expect(function(){map('a', foo)}).to.throw()
        expect(function(){map(undefined, foo)}).to.throw()
        expect(function(){map("String", foo)}).to.throw()
        expect(function(){map(1, foo)}).to.throw()
        expect(function(){map(function(){}, foo)}).to.throw()
    });
    it('Should throw when second argument is of inappropriate type', function() {
        expect(function(){map([4,5], 'a')}).to.throw()
        expect(function(){map([4,5], undefined)}).to.throw()
        expect(function(){map([4,5], null)}).to.throw()
        expect(function(){map([4,5], "String")}).to.throw()
        expect(function(){map([4,5], 1)}).to.throw()
    });
});