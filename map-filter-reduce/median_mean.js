const input = [12, 46, 32, 64, 17, 55];
//---------> Median <---------
/*let num_asc_ord = input.sort(function(a, b) {
    return a - b;
})*/
let num_asc_ord = input.sort((a, b) => a - b);
//console.log(num_asc_ord);
if (num_asc_ord.length % 2 == 0) {
    let a = num_asc_ord.length / 2;
    let b = (num_asc_ord.length / 2) + 1;
    var median = (num_asc_ord[a - 1] + num_asc_ord[b - 1]) / 2;
} else {
    var median = num_asc_ord[Math.floor(num_asc_ord.length / 2)];
}
console.log("Median = " + median);
//---------> Mean <---------
let mean_prev = input.reduce(function(sum, x) {
    return sum + x;
}, 0)
let mean = mean_prev / (input.length - 1);
console.log("Mean = " + mean);
