var chai = require('chai');
var expect = chai.expect;
var request = require('supertest');
var app = require('../app'); // Update the path to your Express.js app file

describe('Roman Numerals Route', function() {
  it('should return the correct Roman numeral for a valid input number', function(done) {
    var inputNumber = '10'; // Assuming the input is provided as a string
    var expectedOutput = 'X';
  
    request(app)
      .get('/romannumeral')
      .query({ number: inputNumber })
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
  
        var result = res.body;
        result.input = parseInt(result.input); // Parse the input as a number
  
        expect(result).to.deep.equal({ input: 10, output: expectedOutput });
        done();
      });
  });  

  it('should return the correct Roman numeral for a valid input number', function(done) {
    var inputNumber = '3999'; // Assuming the input is provided as a string
    var expectedOutput = 'MMMCMXCIX';
  
    request(app)
      .get('/romannumeral')
      .query({ number: inputNumber })
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
  
        var result = res.body;
        result.input = parseInt(result.input); // Parse the input as a number
  
        expect(result).to.deep.equal({ input: 3999, output: expectedOutput });
        done();
      });
  });  

  it('should return an error for an invalid input number', function(done) {
    var inputNumber = '';

    request(app)
      .get('/romannumeral')
      .query({ number: inputNumber })
      .end(function(err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.have.property('error');
        done();
      });
  });

  it('should return an error for an invalid input number', function(done) {
    var inputNumber = 'qweqwe';

    request(app)
      .get('/romannumeral')
      .query({ number: inputNumber })
      .end(function(err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.have.property('error');
        done();
      });
  });
});
