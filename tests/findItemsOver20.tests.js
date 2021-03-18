
describe('The findItemsOver20 function', function(){
    
    it('Should return a list of objects over 20', function(){
        
        assert.deepEqual([{"name":"pears","qty":37},{"name":"bananas","qty":27}], findItemsOver20([{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}]));
    });
    
    it('Should return a list of objects over 20', function(){
        
        assert.deepEqual([{"name":"bread","qty":21},{"name":"oranges","qty":37},{"name":"chocolates","qty":27},{"name":"cakes","qty":33}], findItemsOver20([{"name":"bread","qty":21},{"name":"watermelon","qty":10},{"name":"oranges","qty":37},{"name":"chocolates","qty":27},{"name":"cakes","qty":33}]));
    });

});