const input = 6;
console.log(typeof input);
let n_factorial = 1;
for (let n = 1; n < input; n += 1) {
    n_factorial = n_factorial * n;
    console.log(n_factorial);
};
