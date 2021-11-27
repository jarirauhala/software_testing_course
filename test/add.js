import add from '../src/add.js'
import assert from "assert"
import chai from "chai"
import {expect} from "chai"


// integers
describe('add()', function() {
    it('positive integers', function() {
        assert.equal(add(2,3), 5);
    });
});

describe('add()', function() {
    it('negative integers', function() {
        assert.equal(add(2,3), 5);
    });
});

describe('add()', function() {
    it('negative and positive integer', function() {
        assert.equal(add(-2,3), 1);
    });
});

describe('add()', function() {
    it('positive and negative integer', function() {
        assert.equal(add(2,-3), -1);
    });
});

describe('add()', function() {
    it('integer and zero', function() {
        assert.equal(add(3,0), 3);
    });
});

describe('add()', function() {
    it('zero and integer', function() {
        assert.equal(add(0,3), 3);
    });
});

describe('add()', function() {
    it('char with integer', function() {
        expect(function(){add('a',3)}).to.throw(TypeError)
    });
});

describe('add()', function() {
    it('integer with char', function() {
        expect(function(){add(3,'a')}).to.throw(TypeError)
    });
});

// floats
describe('add()', function() {
    it('positive floats', function() {
        assert.equal(add(2.0,3.0), 5.0);
    });
});

describe('add()', function() {
    it('negative floats', function() {
        assert.equal(add(2.0,3.0), 5.0);
    });
});

describe('add()', function() {
    it('negative and positive float', function() {
        assert.equal(add(-2.0,3.0), 1.0);
    });
});

describe('add()', function() {
    it('positive and negative float', function() {
        assert.equal(add(2.0,-3.0), -1.0);
    });
});

describe('add()', function() {
    it('float and zero', function() {
        assert.equal(add(3.0,0), 3.0);
    });
});

describe('add()', function() {
    it('zero and float', function() {
        assert.equal(add(0,3.0), 3.0);
    });
});

describe('add()', function() {
    it('char with float', function() {
        expect(function(){add('a',3.0)}).to.throw(TypeError)
    });
});

describe('add()', function() {
    it('float with char', function() {
        expect(function(){add(3.0,'a')}).to.throw(TypeError)
    });
});


// special cases
describe('add()', function() {
    it('char with char', function() {
        expect(function(){add('b','a')}).to.throw(TypeError)
    });
});

describe('add()', function() {
    it('large numbers', function() {
        expect(function(){
            add(30000000000000000000000000000000000000000000000000000,2000000000000000000000000000000000000000)
        }).to.throw(RangeError)
    });
});

describe('add()', function() {
    it('small numbers', function() {
        expect(function(){
            add(0.000000000000000000000000000000000000000000000000000000003,0.000000000000000000000000000000000000000000001)
        }).to.throw(RangeError)
    });
});
