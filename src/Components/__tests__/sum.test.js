const { Sum } = require("../Sum")

test("Sum of 2 values" , () =>{
    const result = Sum(2,3);

    //Assertion
    expect(result).toBe(5);
}); 