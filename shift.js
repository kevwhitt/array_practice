// similar to .pop, .shift removes the first item in the array
var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.shift());
// expected output: "broccoli"

console.log(plants);
// expected output: Array ["cauliflower", "cabbage", "kale", "tomato"]

plants.shift();

console.log(plants);
// expected output: Array ["cabbage", "kale", "tomato"]]