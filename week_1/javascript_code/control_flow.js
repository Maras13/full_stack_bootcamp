// Opeartors

// if / else blocks --------------------------------
 var myNumber = 7;

if(myNumber > 0) {
     console.log("Positive")
     } else if (myNumber < 0) {
     console.log("Negative")
 } else {
     console.log("Zero")
 }

// // Switch: Instead of If statements
 var emoji = "🐨"


switch (emoji) {
    case "🐨":
    case "🦔":
    case "🐒":
        console.log("Not Extinct");
        break;
    case "🦕":
    case "🦖":
        console.log("Exctinct!");
}

// for loops
for(var i=0; i < 10; i +=1) {
    console.log(i);
}

// while loops
var j = 0;
while(j < 10) {
    // console.log(j);
    j++;
}

// for... in the object

var market = {
    numberOfproducts: 1234,
    numberOfsections: 8,
    name: "Aldi",
    onlineStore: true
};

for(var key in market){
    console.log(key);
    console.log(market[key]) //prints keys and values
};

// for ...of /Arrays

var fruits =["banana", "orange", "apple"];

for(var element of fruits) {
    console.log(element)
}

for(var char of "Palindrom") {
    console.log(char)
}

var coinToss = "heads";

if (coinToss === "heads") {
    result = "win";
} else {
    result = "loss";
}

// Alternative
var result = (coinToss === "heads") ? 'win' : 'loss'; 

