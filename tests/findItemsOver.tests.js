describe('The findItemsOver function', function(){
    
    it('Should return products with quantity higher than threshold', function(){
        
        assert.deepEqual([{"name":"pears","qty":37},{"name":"bananas","qty":27}], findItemsOver([{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}], 20));
    });

});