'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var monologueCtrlStub = {
  index: 'monologueCtrl.index',
  show: 'monologueCtrl.show',
  create: 'monologueCtrl.create',
  update: 'monologueCtrl.update',
  destroy: 'monologueCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var monologueIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './monologue.controller': monologueCtrlStub
});

describe('Monologue API Router:', function() {

  it('should return an express router instance', function() {
    monologueIndex.should.equal(routerStub);
  });

  describe('GET /api/monologues', function() {

    it('should route to monologue.controller.index', function() {
      routerStub.get
        .withArgs('/', 'monologueCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/monologues/:id', function() {

    it('should route to monologue.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'monologueCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/monologues', function() {

    it('should route to monologue.controller.create', function() {
      routerStub.post
        .withArgs('/', 'monologueCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/monologues/:id', function() {

    it('should route to monologue.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'monologueCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/monologues/:id', function() {

    it('should route to monologue.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'monologueCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/monologues/:id', function() {

    it('should route to monologue.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'monologueCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
