function Dog(name) { //D is capitalized to indicate this is a constructor function
    this.name = name;
}

Dog.prototype.fetch = function() {
    console.log('Fetch inside of Dog.prototype');
};

var myDog = new Dog('Alexis');
var randomDog = new Dog('Hey');