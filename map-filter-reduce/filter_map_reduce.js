"use strict";
//const ps = require("prompt-sync");
//const prompt = ps();
// prompt("Write something: ");
var models_and_colors = [
    {model: "27831", color: "red"},
    {model: "77685", color: "blue"},
    {model: "20957", color: "yellow"},
    {model: "32570", color: "green"},
    {model: "02653", color: "blue"},
    {model: "10293", color: "yellow"},
    {model: "98263", color: "red"},
    {model: "05753", color: "blue"},
    {model: "35990", color: "green"}
]
//---------> Filter <---------
var is_color_blue = function(models_and_colors) {
    return models_and_colors.color == "blue";
}
var filter_color_blue = models_and_colors.filter(is_color_blue);
console.log(filter_color_blue);
var is_not_color_blue = function(models_and_colors) {
    return models_and_colors.color !== "blue";
}
var filter_not_color_blue = models_and_colors.filter(is_not_color_blue);
console.log(filter_not_color_blue);
//---------> Map <---------
var list_models_and_colors = models_and_colors.map(function(models_and_colors) {
    return (models_and_colors.model + " --- " + models_and_colors.color);
})
console.log(list_models_and_colors);

var prices = [
    {item: "1", price: 364},
    {item: "2", price: 892},
    {item: "3", price: 902},
    {item: "4", price: 723},
    {item: "5", price: 185},
]
//---------> Reduce <---------
var total_prices = prices.reduce(function(sum, price_to_sum) {
//    console.log(sum + "---" + price_to_sum.price);
    return sum + price_to_sum.price;
}, 0)
console.log(total_prices);
