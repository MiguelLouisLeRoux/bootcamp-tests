
describe('The isFromBellville function', function(){
    
    it('Should return true if registrationNo starts with CY', function(){
        
        assert.equal(true, isFromBellville('CY 123'));
    });

});