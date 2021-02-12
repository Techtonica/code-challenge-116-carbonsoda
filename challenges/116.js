// # Parrot Class
// To gain practice with ES5 constructor syntax, let's create a talking parrot class.
//
// ```
// let polly = new Parrot("Polly");
// polly.speak();
// // returns "Polly want a cracker!"
//
// let benStiller = new Parrot("Ben");
// benStiller.speak();
// // returns "Ben want a cracker!"
//
// let anonymous = new Parrot();

// anonymous.speak();

// _// returns "A nameless parrot want a cracker!"_
// ```
// Update the class definition so the example code runs as shown.

// Using strictly ES5 syntax 
function Parrot(name="A nameless parrot") {
  this.name = name;
}

Parrot.prototype = {
  speak: function() {
    return(this.name + " want a cracker!");
  }
}

module.exports = Parrot;
