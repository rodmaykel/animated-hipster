var assert = require('assert');
var restler = require('restler');

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
    
    
    it('index should response success:1', function(done){
      
      done();
    }) // it
    
    
    after(function(done) {
      log("Index test: finished");
      done();
    }) // after

  }); // describe
});
