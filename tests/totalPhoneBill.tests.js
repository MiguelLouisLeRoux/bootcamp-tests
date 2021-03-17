describe('The totalPhoneBill function', function(){
    
    it('Should return the total phone bill', function(){
        
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });

});