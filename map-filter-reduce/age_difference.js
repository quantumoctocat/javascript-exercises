const input = [
    {
      name: 'John',
      age: 13
    },
    {
      name: 'Mark',
      age: 56,
    },
    {
      name: 'Rachel',
      age: 45,
    },
    {
      name: 'Nate',
      age: 67,
    },
    {
      name: 'Jeniffer',
      age: 65,
    }
];
//Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.
let ages = input.map(function({age}) {
    return [age];
});
console.log(ages);
let ages_2 = ages.flat(2);
console.log(ages_2);
let min_age = Math.min(...ages_2);
let max_age = Math.max(...ages_2);
let age_difference = max_age - min_age;
console.log(`Max age ${max_age} - min age ${min_age} = ${age_difference}`);
