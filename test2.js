const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
};

let demoXYZ = "Headphones";

console.log(factorial(3)); // 6