class Fruit {
    constructor(options) {
      this.type = options.type;
      this.name = options.name;
      this.isRipe = options.isRipe;
      this.calories = options.calories;
    }
    
    ship(destination) {
      console.log(`shipping ${this.name} to ${destination}`);
    }
  }
  
  // raspberry -----------
  
  class Raspberry extends Fruit { // connects prototype
    constructor(options) {
      super(options); // Fruit.call
      this.doBearsLikeIt = options.doBearsLikeIt;
    }
    
    foo() {
      console.log('foo!');
    }
  }
  
  // pineapple -----------
  
  class Pineapple extends Fruit {
    constructor(options) {
      super(options);
      this.fromHawaii = options.fromHawaii;
    }
  }
  
  // instantiation -----------
  const myRaspberry = new Raspberry({
    type: 'berry',
    name: 'raspberry',
    isRipe: true,
    calories: 200,
    doBearsLikeIt: true,
  });
  
  const myPineapple = new Pineapple({
    type: 'bush thing',
    name: 'pineapple',
    isRipe: true,
    calories: 1500,
    fromHawaii: true,
  });
  
  myRaspberry.ship('Alaska');
  myPineapple.ship('Arkansas');
  myRaspberry.foo();