//when a function that is a property of an object is called by 
//referencing the function as a property of that object, this
//refers to the object to witch the function belongs

var ber = {
    weather: 'the weather is always grey.',
    welcomeTo: function() {
        console.log("Welcome to Berlin " + this.weather);
    }

};

ber.welcomeTo();

function City(weather) {
    this.
}