function Person(data) {
  this.name = data.name;
  this.age = data.age;
  this.location = data.location;
  console.log(this); User {name: 'Ryan', age: 31, location: 'Salt Lake'}

  const ryan = new User({
    name: 'Ryan',
    age: 31,
    location: 'Salt lake City'
  });

  const nathan = new User({
    name: 'Nathan', 
    age: 30,
    location: 
  })
}

///// pseudoclassical inheritence ///
function Animal(options) {
  this.name = options.name;
}

function Animal(options) {
  this.species = options.species;
}

Animal.prototype.grow = function() {
  console.log('${this.name} grew larger');
};

function Dog(dogAttributes) {
  Animal.call(this, dogAttributes);
  this.speak = dogAttributes.speak;
  this.waggyTail = dogAttributes.waggyTail;
}

const grizzly = new Dog({
  species: "Canis cuetus',
  name: "Grizzly Bear',
  speak: 'woof',
  waggyTail: true,
});

grizzly.grow(); 
console.log(grizzly); 