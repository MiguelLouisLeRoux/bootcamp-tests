
describe('The greet function', function(){

    it('Should greet Andrew correctly', function(){
        assert.equal('Hello, Andrew', greet('Andrew'));
    });
    it('should greet Karen correctly', function(){
        
        assert.equal('Hello, Karen', greet('Karen'));
    });
    it('should greet Ben correctly', function(){
        
        assert.equal('Hello, Ben', greet('Ben'));
    });

});
