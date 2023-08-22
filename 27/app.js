// Favorite Fruit: Make a array of your favorite fruits, 
// and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. 
// Each should check whether a certain kind of fruit is in your array. 
// If the fruit is in your array, the if block should print a statement, 
// such as You really like bananas!
var favorite_fruits = ['mango', 'lychee', 'banana'];
var fruit = 'lychee';
if (favorite_fruits.indexOf(fruit) !== -1) {
    console.log("you really like ".concat(fruit));
}
fruit = 'apple';
if (favorite_fruits.indexOf(fruit) !== -1) {
    console.log("you really like ".concat(fruit));
}
fruit = 'banana';
if (favorite_fruits.indexOf(fruit) !== -1) {
    console.log("you really like ".concat(fruit));
}
fruit = 'mango';
if (favorite_fruits.indexOf(fruit) !== -1) {
    console.log("you really like ".concat(fruit));
}
fruit = 'pineapple';
if (favorite_fruits.indexOf(fruit) !== -1) {
    console.log("you really like ".concat(fruit));
}
