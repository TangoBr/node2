function subtract (num1, num2) {
    if ( typeof num1 === `number` && typeof num2 === `number`) {
        return num1 - num2;
    }
};

module.exports = subtract;

function doMath () {
    return `stuff`;
}

// module.exports = {subtract, doMath}

