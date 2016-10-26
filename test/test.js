var chai = require('chai');
var expect = require('chai').expect;
var request = require('supertest');

var app = require('../index');

describe('Routes Test', function () {
  it('GET / Route test', function (done) {
      request(app)
      .get('/')
      .expect(200, done);
  });

  it('POST /fb_status_update Route test', function (done) {
    var msg = {message: 'Mocha Test msg ...'};
    request(app)
      .post('/fb_status_update')
      .send(msg)
      .end(function(err, res) {
            if (err) {
              throw err;
            }
            done();
      });

  });

});
