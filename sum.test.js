//test cases for our unit function sum
const sum = require('./test/sum')

//jest test cases
//test function to test 
test('fun should return 3',()=>{
    expect(sum(1,2)).toBe(3);  //toBe()->exactly equal  , expect()-> to execute our unit
})

test('Object in array',()=>{
    const data = {'one':1}
    data['two']=2;
    expect(data).toEqual({'one':1,'two':2})

})
test('Value is null',()=>{
    const n = null;
    expect(n).toBeNull();
})

test('Value is defined',()=>{
    const a = 1;
    expect(a).toBeDefined();
})

test('Value is Truth',()=>{
    const bool = true;
    expect(bool).toBeTruthy();
})

test('Value is False',()=>{
    const bool = false;
    expect(bool).toBeFalsy();
})