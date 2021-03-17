var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328');

describe('The countRegNumber function', function(){
    
    it('Should return the number of registration numbers in given string', function(){
        
        assert.equal(3, regCount);
    });

});
