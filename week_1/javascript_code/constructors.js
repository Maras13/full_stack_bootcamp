// constructors are functions that when called with a new 
// keyword return a newly created object
// they begin with capital letters

function Country(name) {
    this.name = name;
}
var germany = new Country('Germany');

// this refers to the newly created object
// that will be returned

function Country(name) {
    this.name = name;
    return 10;
}

var germany = new Country('Germany');

console.log(germany);

var date = new Date;

var time = new Date().getTime(); //parentheses are needed

// Prototypes 

// every function has a prototype whose value is an 
//object with no enumerable properties.

function GermanCity(name) {
    this.name = name;
}

GermanCity.prototype.country = 'Germany';

var berlin = new GermanCity('Berlin');
var hamburg = new GermanCity('Hamburg');

berlin.country; //Germany
hamburg.country; //Germany

GermanCity.prototype.country = 'Deutschland';

berlin.country;
hamburg.country;

berlin.constructor; //GermanyCity

GermanCity.prototype = {};

var hamburg = new GermanCity('Hamburg');

hamburg.constructor //Object

// Instanceof operator

var date = new Date; 
date instanceof Date; //true
date instanceof Object; //true
date instanceof Array; //false

// use it to make a constructor without using new

function Country(name) {
    if (!(this instanceof Country)) {
        return new Country(name);
    }
    this.name = name;
}

var country = Country('Germany');

country instanceof Country; //true







