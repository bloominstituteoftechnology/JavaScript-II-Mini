class Fruit {
  constructor(attrs) {
    this.type = attrs.type;
    this.name = attrs.name;
    this.isRipe = attrs.isRipe;
    this.calories = attrs.calories;
  }
  calculateCalories() {
    console.log('Calories in a ${this.name} are ${this.calories * 200}');  
  }
}

class Banana extends Fruit {
  constructor (banttrs){
  super(banAttrs);
  this.doMonkeysEat = banattrs.doMonkeysEat;
}

ripen() {
  if(tis.isRipe === false) {
    this.isRipe = true;
    }
  }
}

Banana.prototype = Object.create(Fruit.prototype);
Banana.prototype.ripen = function() {
  if(this.isRipe === false) {
    this.isRipe = true;
  }
}

class Kiwi extends Fruit {
  constructor(kiwiAttrs) {
//   Fruit.call(this, kiwiAttrs);
//   this.isFuzzy = kiwiAttrs.isFuzzy;
// }
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