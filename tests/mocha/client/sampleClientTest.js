if (!(typeof MochaWeb === 'undefined')){

  MochaWeb.testOnly(function(){

    describe("Test login", function() {
    	
        beforeEach(function(done) {        	
            Meteor.loginWithPassword("falcon", "451987", function(err) {
                done();
            });
        });

        it("user logged in", function() {
            chai.expect(Meteor.userId()).not.to.be.null;
        });
    });

  });
  
}
