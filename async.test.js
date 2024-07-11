const {fetchData,MyData} = require('./test/async')

test('Callback data',done=> {
    function callback(data) {
        try{
            expect(data).toBe('Mikey');
            done();  //test case completed
        } catch(err){
            done(err);
        }
    }
    fetchData(callback);
})

test('Callback my data',done=> {
    function callback(data) {
        try{
            expect(data.id).toBe(1111);
            done();  //test case completed
        } catch(err){
            done(err);
        }
    }
    MyData(callback);
})


test('Mocking Callback function',done=> {
    const MockFunction=jest.fn(data =>{
        
            expect(data).toBe('Mikey');
            console.log('Mock Function');
            done();  //test case completed
        
     })
    fetchData(MockFunction);
})
