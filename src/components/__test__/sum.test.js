const { sum } = require("../sum")

test('operation of sum fun', () => { 
    const res1=sum(3,4)
    
    expect(res1).toBe(7);
 })