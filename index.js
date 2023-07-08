var array = [1, 2, 3, 4, 5, 6];
var result = array.splice(1, 2, 10, 12, 13, 19);
console.log(result);
// result will print the elements are are cut off: output is [ 2, 3 ]
console.log(array);
// array will be changed after using splice method.
// output is : [   1, 10, 12, 13,  19,  4,  5,  6]
var newArray = [1, 2, 3, 4, 5, 6];
var ok = newArray.splice(-1, 2, 10, 12, 13, 19);
console.log(ok);
// output is: [ 6 ]
console.log(newArray);
// output is: [ 1,  2,  3,  4, 5,  10, 12, 13, 19]
