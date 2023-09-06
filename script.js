// LESSON: OBJECTS AND OBJECT CONSTRUCTORS

// First exercise
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return title + author + ", " + pages + "pages, " + read;
    }
}

const book = new Book("The Hobbit by J.R.R.", "Tolkien", 295, "not read yet");
console.log(book.info());

// Above creates an object Book with its variables. The Lower creates a new Book and declares its variables. 
// Note that in functions one should always try and use return rather than console log in the function.
// Why? Not sure exactly but its almost always the best practice.
// Return and then console log the return value is best practice.

// Book is called an object constructor and its used when we need to duplicate objects. In this case we can have many different books.
// Otherwise we would need to reuse the Book code for each book and that takes to much space and time.


// THE PROTOTYPE
// All objects inherits from the prototype object


//PROTOTYPAL INHERITANCE
// Object.setPrototypeOf(Player.prototype, Person.prototype)
// Object.getPrototypeOf(Player.prototype) // returns Person.prototype
// This makes Player object inherit from Person object.
// Remember setPrototypeOf, and getPrototypeOf


// A constructor is in the beginning just a regular function but it becomes a constructor when we use the 
// new keywoard. 

// Another example: warriors with different abilities. They share a couple of things like name and level
// but differ in their abilities. Now we can make use of classes and they will inherit name and level from Hero 
// while the abilities needs a new class

function Hero(name, level) {
    this.name = name;
    this.level = level;
}

let hero1 = new Hero("Björn", 1); // at this point Hero becomes a constructor
console.log(hero1);
console.log(Object.getPrototypeOf(hero1));

// this is how we can create a function called greet and add it to Hero
Hero.prototype.greet = function () {
    return `${this.name} says hello.`;
}
// we now say that greet is in the prototype of Hero

console.log(hero1.greet());

// Initialize Warrior constructor
function Warrior(name, level, weapon) {
  // Chain constructor with call
  Hero.call(this, name, level);

  // Add a new property
  this.weapon = weapon;
}

// Initialize Healer constructor
function Healer(name, level, spell) {
  Hero.call(this, name, level);

  this.spell = spell;
}
Warrior.prototype.attack = function () {
    return `${this.name} attacks with the ${this.weapon}.`;
}

Healer.prototype.heal = function () {
    return `${this.name} casts ${this.spell}.`;
}

const hero3 = new Warrior ("Gustaf", 1, "axe");
const hero2 = new Healer('Kanin', 1, 'cure');
console.log(hero3.attack());

// right now hero3 and hero2 dont have the greet function and they need to inherit it from Hero
//console.log(hero3.greet()) // this will not work rn

// we need to use Object.setPropertyOf() to link the properties in the Hero constructor to the Warrior and Healer contructors
Object.setPrototypeOf(Warrior.prototype, Hero.prototype); // now Warrior inherits from Hero and we can use the greet function for hero3
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

console.log(hero3.greet());