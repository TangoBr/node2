const divide = require(`../math/divide`);

test(`Divide Function w/`, () => {
    expect(divide(6,2)).toBe(3);
});

test(`Divide Function w/`, () => {
    expect(divide(`string`, true)).toBeNull();
})
