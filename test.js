var romannumbers = require('./RomanNumbers3');
const assert = require('assert');
var chai = require('chai');
const { ArabicToRoman } = require('./RomanNumbers3');
var expect = chai.expect; 


describe('RomanNumbers3', function() {

it('should return string', function() {

    expect(romannumbers.ArabicToRoman(1)).to.be.a("string")

});   

it('should only take int', function() {

    expect(() => romannumbers.ArabicToRoman('4')).to.throw("n is not an integer")
    expect(() => romannumbers.ArabicToRoman('Four')).to.throw("n is not an integer")
    expect(() => romannumbers.ArabicToRoman(null)).to.throw("n is not an integer")
    expect(() => romannumbers.ArabicToRoman(true)).to.throw("n is not an integer")
    expect(() => romannumbers.ArabicToRoman()).to.throw("n is not an integer")
});

});