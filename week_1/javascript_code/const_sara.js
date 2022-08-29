function newDog() {
    return {
        isDog: true,
        hasPaws: true
    }
}

var bura = newDog();
console.log(bura);

// with a constructor

function Dog(name) {
    this.name = name;
    this.isbear = true;
    this.hasPaws = true;
    this.introduce = function () {
        console.log("Hi! My name is " + this.name + " and I'm a dog");
    } 
}
var meo = new Dog('meo');
console.log(meo);

meo.introduce();