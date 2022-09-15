function logType(item) {
    var itemType = typeof item;

    if (itemType == "null") {
        console.log("null");
    }
        else if (itemType == Number.isNaN(item)) {
        console.log("not a number");
    }
        else if (itemType == "undefined") {
        console.log("undefined");
    }
        else if (itemType == "number") {
        console.log("number!");
    }
        
        else if (itemType == "string") {
        console.log("string!");
    }
        else if (item == "boolean") {
        console.log("boolean!");
    }
        else if (itemType == "bigint") {
        console.log("bigint!");
    }
        else if (itemType == "function") {
        console.log("function!");
    }
        else if (itemType == "object") {
        console.log("object!");
    }
        else if (itemType == Array.isArray(item)) {
        console.log("array!");
    }
        else {
        console.log("I have no idea!")
    };

};
var number = 12346
console.log(logType(number));

// Why I'm getting undefined?;

 
 var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};

var b = {};

for (var key in a) {
    b[a[key]] = key
};

console.log(b);

var i = 10;

while (i > 0){
    console.log([i]);
    i--;
};
