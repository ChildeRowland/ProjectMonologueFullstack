'use strict';

var app = require('../..');
import request from 'supertest';

var newMonologue;

describe('Monologue API:', function() {

  describe('GET /api/monologues', function() {
    var monologues;

    beforeEach(function(done) {
      request(app)
        .get('/api/monologues')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          monologues = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      monologues.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/monologues', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/monologues')
        .send({
          name: 'New Monologue',
          info: 'This is the brand new monologue!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newMonologue = res.body;
          done();
        });
    });

    it('should respond with the newly created monologue', function() {
      newMonologue.name.should.equal('New Monologue');
      newMonologue.info.should.equal('This is the brand new monologue!!!');
    });

  });

  describe('GET /api/monologues/:id', function() {
    var monologue;

    beforeEach(function(done) {
      request(app)
        .get('/api/monologues/' + newMonologue._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          monologue = res.body;
          done();
        });
    });

    afterEach(function() {
      monologue = {};
    });

    it('should respond with the requested monologue', function() {
      monologue.name.should.equal('New Monologue');
      monologue.info.should.equal('This is the brand new monologue!!!');
    });

  });

  describe('PUT /api/monologues/:id', function() {
    var updatedMonologue;

    beforeEach(function(done) {
      request(app)
        .put('/api/monologues/' + newMonologue._id)
        .send({
          name: 'Updated Monologue',
          info: 'This is the updated monologue!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedMonologue = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedMonologue = {};
    });

    it('should respond with the updated monologue', function() {
      updatedMonologue.name.should.equal('Updated Monologue');
      updatedMonologue.info.should.equal('This is the updated monologue!!!');
    });

  });

  describe('DELETE /api/monologues/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/monologues/' + newMonologue._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when monologue does not exist', function(done) {
      request(app)
        .delete('/api/monologues/' + newMonologue._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
