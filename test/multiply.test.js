const multiply = require(`../math/multiply`);

test (`Testing Multiply Function`, () => {
    expect(multiply(3,2)).toBe(6);
});

test(`Testing Muultiply Function w/ "string" & "taco"`, () => {
    expect(multiply(`string`, `taco`)).toBeNull();
});