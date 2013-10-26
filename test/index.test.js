var assert = require('assert');
var should = require('should');
var supertest = require('supertest');
var app = require('../app');

var LOG = false;

function log(str){
  if (LOG === true) {
    console.log(str);
  }
}


describe('Index', function(){

  before(function(){
    log("Index test: started");
  }) // before
  
  describe('#index_success', function(){
    before(function(){
      log("index_success: started");
    }) // before


    beforeEach(function(){
      log("===================================================");
    }) // before
    
    
    it('index dummy test', function(done){
      
      done();
    }) // it

    it('index should response success:1', function(done){
      supertest(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res){
          if (err) return done(err);
          should.equal(res.body.success, 0);
          done();
        });
    }) // it
    
    
    after(function(done) {
      log("Index test: finished");
      done();
    }) // after

  }); // describe
});


