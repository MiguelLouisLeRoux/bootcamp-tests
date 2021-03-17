
describe('The regCheck function', function(){
    
    it('Should return true if location indicator refers to registration number', function(){
        
        assert.equal(true, regCheck('DC 55 YU GP', 'GP'));
    });

});