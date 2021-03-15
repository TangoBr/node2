// unit test: tests a specific function or block of code e.g. a unit of code

// test @params: `string titke`, cb()
test(`Testing Add function`, () => {
    // expect() @params: expression || value @method-call matcher
    expect(2 + 2).toBe(4);
});

// if a string hello world includes the word hello
// const str = `hello world`;
// expect(str.includes(`hello`).toBe(true));

const add = require(`../math/add`);

test (`Testing Add Function`, () => {
    expect(add(5,5).toBe(10))
    expect(add(`string`, 20).toBe(null))
});

