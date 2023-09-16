// LESSON: FACTORY FUNCTIONS AND MODULE PATTERNS

// Quickly put: factory functions look like constructors but use return, instead of having to use the new keyword.
// Factory functions do not utilize the prototype. This comes with a performance penalty. This penalty is mostly apparent
// when you're creating thousands of objects
// An example:

const personFactory = (name, age) => {
    const sayHello = () => console.log("hello");
    return {name, age, sayHello};
}

const jeff = personFactory("jeff", 27);

console.log(jeff.name);
jeff.sayHello();

// there is another condense way to write this. if the object you're creating has the same name as object property you can write like this:
// return {name: name, age: age, sayHello: sayHello}
// return {name, age, sayHello};


// scope and context
// scope === variable access
// context === this, value of this

// closure: this is the concept that functions retain their scope even if they are passed around and called outside of that scope

const Player = (name, level) => {
    let health = level * 2;
    const getLevel = () => level;
    const getName  = () => name;
    const die = () => {
      // uh oh
    };
    const damage = x => {
      health -= x;
      if (health <= 0) {
        die();
      }
    };
    const attack = enemy => {
      if (level < enemy.getLevel()) {
        damage(1);
        console.log(`${enemy.getName()} has damaged ${name}`);
      }
      if (level >= enemy.getLevel()) {
        enemy.damage(1);
        console.log(`${name} has damaged ${enemy.getName()}`);
      }
    };
    return {attack, damage, getLevel, getName};
};
  
const jimmie = Player('jim', 10);
const badGuy = Player('jeff', 5);
jimmie.attack(badGuy);

jimmie.die(); // this is not exposed publicly so we get an error