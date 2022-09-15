// Exercise 2.
var originalArray = [1, 2, 3]


 function reverseArray(arrays) {
    var reversedArray = [];
    for(var i = arrays.length -1; i >= 0; i-- ) {
        reversedArray.push(arrays[i]);
    }
    return reversedArray;
};

var reversedArray = reverseArray(originalArray);
console.log(originalArray);
console.log(reversedArray);



// Exercise 3.


function getLessThanZero (array) {
    var newArray = array.filter(i => i < 0);
    return newArray
};

var sara = getLessThanZero([1, 2, -1, -90, 10]); 
console.log(sara)

// Exercise 1.

function each (objOrArray, callback) {
    if (objOrArray === "object") {
        for (var key in objOrArray) 
            callback(objOrArray[val], key)
            
        };
    } else if (Array.isArray(objOrArray)) {
        for(var i = 0 ; i < objOrArray.length; i++) {
            callback(objOrArray[i], i);

        };
       
    };

};

// Test

each({
    a: 1,
    b: 2
}, function(val, name) {
    console.log('The value of ' + name + ' is ' + val);
}); // logs 'the value of a is 1' and 'the value of b is 2'



each(['a', 'b'], function(val, idx) {
    console.log('The value of item ' + idx + ' is ' + val);
}); // logs 'the value of item 0 is a' and 'the value of item 1 is b'

