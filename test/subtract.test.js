const subtract = require(`../math/subtract`);

test(`Subtract function w/`, () => {
    expect(subtract(10,3)).toBe(7);
});

test (`Subtract function`, () => {
    expect(subtract(true,`string`)).toBeNull();
});



