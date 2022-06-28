const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
  ];
  let elements = input.flat(2);
  console.log(elements);
let count = elements.reduce(function(acc, curr) {
    if (acc[curr]) {
        acc[curr] += 1;
    } else {
        acc[curr] = 1;
    };
    return acc;
}, {});
console.log(count);
