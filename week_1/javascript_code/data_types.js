// There are 8 data_types in Javascript Language

// Undefined, null, Boolean, Number, String, Symbols(something like strings)
// BigInt(), Objects

//typeof operator checks any values

typeof('test');
console.log(typeof('test'));

typeof [1,2,3]; // returns object for arrays

typeof function(){}; //'function'

Array.isArray([1,2,3]); //true
Array.isArray('pizza'); //false

var n = null;
n === null; //true;

typeof(NaN); //number
console.log(typeof(NaN));

//NaN == NaN; //false
//NaN === NaN; //false

isNaN(NaN); //true

// JavaScript has an Constructors for string, numbers, booleans
typeof new String("test"); //'object'
typeof new Number(55); //'object'

String(666); //'666'
Number('100'); //100
Number('pizza'); //NaN
Number(true); //1
Boolean(0); //false


function sum(num1, num2, num3) {
    var mysum = num1 + num2 + num3;
    console.log("mysum", mysum);
}

sum(1,2,3);

var text = "Hello sara you can spend:";
var money = 10;
var message = text + money + " €";
console.log(message);