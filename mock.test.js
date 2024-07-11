//mock getData and process the mocked data
//mock module
//('module url',function)
jest.mock('./test/utils',()=>({
    getData:jest.fn(),
    getRaw:jest.fn()
}));

const {getData,getRaw} = require('./test/utils');
const {processData,processRaw} = require('./test/processData');

//we can mock the return value using mockReturnValue
test('Mocked the process data',()=>{
    //mock the return value of getData
    getData.mockReturnValue('Mocked data');
    expect(processData()).toBe('Processed:Mocked data');
});

test('Mocked raw data',()=>{
    //mock the return value of getRaw
    getRaw.mockReturnValue(true);
    expect(processRaw()).toBe(true);
});
//to mock it we have to import them in the form of an object