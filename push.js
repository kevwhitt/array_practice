// .push does edit the original array
(function string() {
var sports = ['soccer', 'baseball'];
sports.push('football', 'swimming'); 
console.log(sports); // output is the contents of the array
}());

(function num() {
var sports = ['soccer', 'baseball'];
sports = sports.push('football', 'swimming'); 
console.log(sports); // output is the length of the array
}());