

function sum() {
    var added = 0;
    for (var i = 0; i < arguments.length; i++) {
        added += arguments[i];
        
    }
    return console.log(added);
};

sum(5, 10); //15

sum(5, 10, 15); //30;

sum(5, 10, 15, 100, 200); //330


//Write a function named waitThenRun that takes another function as an argument. 
//It should wait 1.5 seconds and then run the function that was passed in.

function waitThenRun(a){
    setTimeout(a,1500);
};

waitThenRun(function () {
    console.log("Hello!");
    waitThenRun(function () {
        console.log("Goodbye!");
    }); // logs 'Goodbye!' 1.5 seconds later
}); // logs 'Hello!' 1.5 seconds later



// Wooohooo!!!

function myNumber(num) {
    if (typeof num !== "number" || num <= 0 || isNaN(num)) {
        return "ERROR";
    }
    if (num >= 1000000) {
        return num;
    }
    else {
        while (num <= 1000000) {
            num = num * 10;
        }
        return num;
    };
};

console.log(myNumber(0));
console.log(myNumber(12143615));
console.log(myNumber(10));
