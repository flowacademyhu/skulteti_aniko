//8.
const sum = (num1, num2) => {
    return num1 + num2;
};

const mult = (num1, num2) => {
    return num1 * num2;
};

const pow = (alap, hatvany) => {
    let result = 1;
    for (let i = 1; i <= hatvany; i++) {
        result *= alap;
    }
    return result;
};


module.exports = {
    sum,
    mult,
    pow,
}