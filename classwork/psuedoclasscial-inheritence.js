// Fruit is a prototype constructor
//Fruit is the parent class.  The other classes are subclasses of the parent.
function Fruit(attrs) {
  this.type = attrs.type;
  this.name = attrs.name;
  this.isRipe = attrs.isRipe;
  this.calories = attrs.calories;
}
Fruit.prototype.calculateCalories = function() {
  console.log('Calories in a ${this.name} are ${this.calories * 200}');  
};

function Banana(attrs) {
  Fruit.call(this, attrs);
  this.doMonkeysEat = attrs.doMonkeysEat;
}

function Kiwi(kiwiAttrs) {
  Fruit.call(this, kiwiAttrs);
  this.isFuzzy = kiwiAttrs.isFuzzy;
}

Banana.prototype = Object.create(Fruit.prototype);
Banana.prototype.ripen = function() {
  if(this.isRipe === false) {
    this.isRipe = true;
  }
}

Kiwi.prototype = Object.create(Fruit.prototype);

const myBanana = new Banana ({
  type: 'tree',
  name: 'Banana',
  isRipe: true,
  calories: 3,
  doMonkeysEat: true,
});

myBanana.ripen();
console.log(myBanana);

const myKiwi = new Kiwi ({
  type: 'tree',
  name: 'Kiwi',
  isRipe: false,
  calories: 3,
  isFuzzy: true,
});

console.log(myKiwi);
myKiwi.calculateCalories();
myBanana.calculateCalories();
myKiwi.ripen();
// BananaMaca