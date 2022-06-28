const input = 'Every developer likes to mix kubernetes and javascript';
let words = input.split(" ");
console.log(words);
let words_2 = words.map(function(w) {
    let word_length = w.length;
    if (word_length >= 4) {
        return (w[0] + (word_length - 2) + w[word_length - 1]);
    } else {
        return w;
    }
});
console.log(words_2);
let numeronyms = words_2.join(" ");
console.log(numeronyms);
