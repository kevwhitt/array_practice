// this is set to return false, but it will returm true once it finds something truthy
// output is true or false

function triplets (num) {
    return num % 3 == 0;
}

var array = [2, 5, 19, 44];

console.log(array.some(triplets));
// none of those are multiples of 3, so it will return false

var newArray = [2, 5, 19, 45];

console.log(newArray.some(triplets));
// though this only has one thruthy number, it still returns true