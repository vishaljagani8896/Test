const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
};

var test = "test text";

console.log(factorial(3)); // 6