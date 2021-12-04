import at from '../src/at.js'
import assert from "assert"
import chai from "chai"
import {expect} from "chai"

const testObject = { 'a': [{ 'b': { 'c': 3 } }, 4] }

// nominal
describe('at(), Nominal Input', function() {
    it('Valid object with valid path', function() {
        assert.deepEqual(at(testObject, ['a[0].b.c', 'a[1]']), [3,4]); 
        assert.deepEqual(at(testObject, ['a[0].b.c',]), [3]);
    });
    it('Valid object with invalid path', function() {
        assert.deepEqual(at(testObject, ['a[2]']), [undefined]); 
    });
});

// erroneous 
describe('at(), Erroneous Input', function() {
    it('Should throw when object type is inappropriate', function() {
        expect(function(){at('a', 'a[1]')}).to.throw()
        expect(function(){at(undefined, 'a[1]')}).to.throw()
        expect(function(){at("String", 'a[1]')}).to.throw()
        expect(function(){at(1, 'a[1]')}).to.throw()
        expect(function(){at(function(){}, 'a[1]')}).to.throw()
    });
    it('Should throw when path type is inappropriate', function() {
        expect(function(){at(testObject, 'a')}).to.throw()
        expect(function(){at(testObject, undefined)}).to.throw()
        expect(function(){at(testObject, null)}).to.throw()
        expect(function(){at(testObject, function(){})}).to.throw()
    });
});