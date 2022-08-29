var colors = ["pink", "blue", "orange", "green"];

console.log("Third items in a list", colors[2]);

colors[0] = "red";


console.log("Changed pink to red color", colors);

console.log("colors.length:", colors.length);

// -1 doesn't work like in python
// to get the last item of the list

console.log("colors[colors.length-1]:", colors[colors.length -1]);

// methods are functions inside the object

// Built in array methods

// push & pop

//.push() I can add values to the end

// .pop() I can remove values at the end

colors.push("black");
console.log(colors);

var lastItem =colors.pop();
console.log(lastItem);

// .unshift() and .shift()

// unshift() adds values to the beginning of an array

// shift() removes the first item of an array

colors.unshift("purple");
console.log(colors);

colors.shift('purple');
console.log(colors);



// two very different methods
// .slice()
// allows me to copy the entire array or  subsection of the array
// leaves original array untouched
//1st: where I want to start copying
//2nd: where to end the slicing
// no third arguments
var colors = ["pink", "blue", "orange", "green"];

var mySubColors = colors.slice(0,3);
console.log(mySubColors);

var myClonedColors = colors.slice();
console.log(colors === myClonedColors);





//.splice()
//allowes me to create an array, based on another array
//splice affect our original source array
//accepts 3 arguments
// 1st: index where you want to start
// 2nd how many items you want to sPlice
// 3rd what you want to place instead
var colors = ["pink", "blue", "orange", "green"];

var removed = colors.splice(1,2,"white", "gray");

console.log(removed);

//accessing all my values inside of an array

for (var i =0; i<colors.length; i++) {
    console.log("i", i);
    console.log("colors[i]", colors[i]);
}

// .filter()


