const input = 'George Raymond Richard Martin';
let split_input = input.split(" ");
console.log(split_input);
//console.log(separated_input[0].length);
let initials = split_input.map(function(x) {
    return x[0];
})
console.log(initials);
let join_initials = initials.join("");
console.log(join_initials);
