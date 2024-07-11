let dataSets = [];
//execute my env before all
beforeAll(()=> {
    dataSets = ['Mikey','Draken'];
})
beforeEach(()=> {
    console.log('Before each setup is called')
})
afterEach(()=>{
    console.log('After each setup is called')
})
afterAll(()=> {
    dataSets = [];
})
test('Test case',()=> {
    expect(dataSets.length).toBe(2);
})

test('Dataset contains',()=> {
    expect(dataSets).toContain('Draken');
})

test('Dataset contains',()=> {
    expect(dataSets).toContain('Mikey');
})