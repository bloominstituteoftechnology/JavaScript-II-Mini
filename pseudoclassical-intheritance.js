class Fruit {
    constructor(attrs) {
    this.type = attrs.type;
    this.name = attrs.name;
    this.isRipe = attrs.isRipe;
    this.calories = attrs.calories;
    }
    calculateCalories = function() {
        console.log(`Calories in a ${this.name} are ${this.calories * 200}`);
      }
}
  
class Banana extends Fruit {
     constructor(banAttrs) {
        super(banAttrs);
        this.doMonkeysEat = banAttrs.doMonkeysEat;
     }
     ripen() {
        if(this.isRipe === false) {
            this.isRipe = true;
        }
     }
}
  

class Kiwi extends Fruit {
    constructor(kiwiAttrs) {
        super(kiwiAttrs);
        this.isFuzzy = kiwiAttrs.isFuzzy;
    }
    isFuzzy() {
        if (this.isFuzzy === false) {
            this.isFuzzy = true;
        }
    }
}
  
const myBanana = new Banana({
    type: 'tree',
    name: 'Banana',
    isRipe: false,
    calories: 1,
    doMonkeysEat: true,
  });
  
const myKiwi = new Kiwi({
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