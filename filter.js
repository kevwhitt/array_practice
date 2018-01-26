// this searches through the array and then can minipulate the contents through another function
// this creates a new array containing the true values from the filter and omitting the false ones

function even(nums) {
    if (nums % 2 == 0){
        return nums;
    }
    else if (nums % 2 == 1) {
        return false;
    }
}
var array = [1, 4, 89, 26, 77, 52, 29];

var evens = array.filter(even)
console.log("The even numbers are " + evens)