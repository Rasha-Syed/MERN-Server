const mongoose = require('mongoose')
describe('MongoDB connected',()=> {
    beforeAll(async ()=> {
        const url = 'mongodb+srv://rashanishath:xF9HdOUVyPQizGxf@cluster0.kcnltqo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        await mongoose.connect(url);
    })
    test('MongoDB connected to server',()=> {
        expect(mongoose.connection.readyState).toBe(1)
    })
});
//call test case inside describe and below before all
