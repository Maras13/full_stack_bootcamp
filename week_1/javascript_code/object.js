//var name = "Sara";
//var age = 31;
//var city = "Rijeka";
//var favoriteMovies = ["Lord of the Rings", "Matrix", "Green Mile"];

var person = {
    name: "Sara",
    age: 31,
    city: "Rijeka",
    "favorite Movies":["Lord of the Rings", "Matrix", "Green Mile"],
};

console.log(person);

// to access values inside of object
// we can use dot notations

console.log(person.name);

console.log(person["name"]);

console.log(person["favorite Movies"]);

// adding some more data to my person object

person.address = {
    street: "Ritterstrasse",
    house: 12,
    city: "Berlin",
    country: "Germany",
};

delete person.city;
console.log("person after delete", person);

/// You can also store function in the object

person.sayHi = function () {
    console.log("Well, hello there!");
};

person.sayHi();

console.log(person.favoriteFilms);

console.log(person.favoriteFilms.length);

person.favoriteFilms.push("On the edge of heaven");

person.age += 1;

console.log(person.age);




