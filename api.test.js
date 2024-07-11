const fetchData = require('./test/api');
//const fetch = require('node-fetch');
//jest.mock('node-fetch');

test('GET /users api data',async()=> {
    const data = await fetchData();
    console.log(data);
    expect(data).toHaveProperty('getUsers');
    //test if all data has 4 pars
    data.getUsers.forEach(user=> {
        expect(user).toHaveProperty('id');
        expect(user).toHaveProperty('name');
        expect(user).toHaveProperty('email');
    })
})