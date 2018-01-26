// creates new array with all new values, working on each individually

function add(num) {
    return num + 2;
}
var array = [2, 4, 8];
console.log(array.map(add));