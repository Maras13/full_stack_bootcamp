var obj = {
    name: 'Leonardo',
    age: 42
};

// setTimeout takes two arguments

setTimeout(function() {
    console.log('Hello');
}, 1000);

if (true) {
    console.log('hello')
}

for (var i=0; i < 8; i++) {
    if (i > 5) {
        console.log(i-5);
    } else {
        console.log(i);
    }
}

var actors = [
    {
        name: 'Jennifer Lawrence',
        age: 27
    },
    {
        name: 'Meryl Streep',
        age: 68
    }
];

function createActor(name, age, oscars) {
    return {
        name: name,
        age: age,
        oscars: oscars,
        hello: hello,
        hasMoreOscarsThan: hasMoreOscarsThan
    }
    function hello() {
        console.log('Hello, my name is ' + this.name);
    }
    function hasMoreOscarsThan(actor) {
        return this.oscars > actor.oscars;
    }
}

