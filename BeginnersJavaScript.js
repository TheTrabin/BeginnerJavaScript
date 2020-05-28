//Basic JavaScript

//lesson 1 - Var, Bool

var hello = "hello, world!"
console.log(hello)
var characterName = 'Trabin';
var age = 34;
console.log(characterName);
let message = `Hi, my name is ${characterName} and my age is ${age}`;
console.log(message);

var maxHealth = 100;
console.log(maxHealth);

var currentHealth = 50.5;
currentHealth = 40.5;
currentHealth = maxHealth; //100
console.log(currentHealth, maxHealth)

var health = 50;
// + - * / % **
health = health + 10; //60
health = health % 50; //10
// health % 2 == 0;
health = health ** 2;
// +=, -=, *=, /=
health -= 20; //health = health - 20
//++, --
health++; // 81
// health = (health * 2) + (health / 5)
health++; //82
health += 1; //83
health = health + 1; //84
console.log(health);
// maxHealth = currentHealth;

// > >= < <= == !=
var number1 = 5;
var number2 = 10;
var result = number1 > number2; //false
result = number1 != number2; //true

var hello ="Hello";
var world ="world";
var string1 ="Hello";
var string2 ="world";
var textResult = hello + world; //helloworld

textResult = string1 == string2; // false
console.log(textResult);

console.log(result);

// !, ||, &&
result = !result; //true
result = number1 > number2 && string1 == string2; ///false
number2 = number1;
result = number1 == number2 || string1 == string2; //true

// x ? y : z
result = number1 > number2 ? number1 : number2;

var numberOfLives = 3;
var isGameOver = !(numberOfLives > 0)


let length = characterName.length;
let upperName = characterName.toUpperCase();
characterName = characterName.toLowerCase();

let tra = characterName.slice(0, 3);
console.log(tra);

// var isGameOver = false; Refactor.
// isGameOver = true;

if (true) {
  var isGameOver = false;
  let isNotGameOver=true;
}
console.log(isGameOver); //undefined
// console.log(isNotGameOver)
var isAtEnd = false;
var level = "Beginner JavaScript 1";
var levels =[
  [1.1, 1.2, 1.3],
  [2.1, 2.2, 2.3, 2.4],
  [3.1, 3.2],
  ];

var firstWorld = levels[0];
var secondWorld = levels[1];
var thirdWorld = levels[2];
var firstWorldLevelOne = levels[0][0];
console.log(firstWorldLevelOne);
var firstWorldLevelTwo = levels[0][1];
console.log(firstWorldLevelTwo);
var firstWorldLevelThree = levels[0][2];
console.log(firstWorldLevelThree);
var secondWorldLevelOne = levels[1][0];
console.log(secondWorldLevelOne);
var secondWorldLevelTwo = levels[1][1];
console.log(secondWorldLevelTwo);
var secondWorldLevelThree = levels[1][2];
console.log(secondWorldLevelThree);
var secondWorldLevelFour = levels[1][3];
console.log(secondWorldLevelFour);
var thirdWorldLevelOne = levels[2][0];
console.log(thirdWorldLevelOne);
var thirdWorldLevelTwo = levels[2][1];
console.log(thirdWorldLevelTwo);
levels[1].pop();
levels[2].push(3.3);
var title = `Level ${level}`;
console.log(title);

var inventory = ["shirt", "axe", "bread"];
// inventory = ["water", "pants"]
let shirt = inventory[0];
inventory[2] = "cheese";
console.log(inventory.length); //3
console.log(inventory[0].length);
inventory.push("water");
var water = inventory.pop();
console.log(inventory)
currentHealth = 50;
// var healAmount = 10;
function heal(healAmount = 10) {
  var newHealth = currentHealth + healAmount;
  currentHealth = newHealth > 100 ? maxHealth : newHealth;
  // currentHealth += healAmount;
  // return 5
  return calculatePercent(currentHealth / maxHealth);

  // function nested() {
  //   return console.log(currentHealth);
  // }
};

function calculatePercent(dividend, divisor) {
  return (dividend / divisor) * 100;
}

// heal(15); // 115
// heal(30); // 130
// var func = function heal() {
//   currentHealth += healAmount;
// }; //110
// heal(40); // 170
var healResult = heal(); //60
console.log("heal 1", healResult); //60
var healRes2 = heal(40); // 100
console.log("heal 2", healRes2); //100

console.log("Final", currentHealth); // currentHealth = 100

var keyPressed = ' ';
var xPos = 0;
let endPos = 10;
let startPos = 0;
var pos = 0;

if (keyPressed == 'r' && xPos < endPos) {
  if(xPos < endPos) {
    xPos += 1; // xPos = -1
  } else {
    xPos = 0;
  };
};

if (keyPressed == 'd') {
  if(xPos < endPos) {
    xPos += 1; // xPos = -1
  }
  console.log("Right", xPos);
} else if (keyPressed == "a"){
  if(xPos > startPos) {
    xPos -= 1; // xPos = -1
  }
  console.log("Left", xPos);

} else {
  xPos = 0;
  console.log("No Movement", xPos);
};

var enemyPos = 4;


// while(pos > endPos) {
//   pos++;
//
// }

// while(!isGameOver) {
//   xPos++;
//   if (xpos >= endPos || xPos == enemyPos) {
//     isGameOver = true;
//   };
// };

// while(xPos < endPos) {
//   xPos++;
//   if (xPos == enemyPos) {
//     break;
//   };
// };

// function doSomething(someNum) {
//   var a = 5;
//   var result = a + someNum;
//   return result; //works as a break.
//   a += 10; //doesn't run.
// }

function movePlayer(someNum) {
  while(xPos < endPos) {
    xPos++;
    if (xPos == enemyPos) {
      return;
    };
  };
};

// while(xPos < endPos) {
//   if (xPos % 2 == 1) {
//     xPos += 2;
//     continue;
//   }
//   xPos++;
//   if (xPos == enemyPos) {
//     break;
//   };
// };

var items = ['Axe', 'Shirt', 'Knife']
var finalString = "In my inventory, I have "

// for(var i = 0; i < items.length; i++) {
//   var itemName = items[i];
//   finalString += itemName + " ";
// }

items.forEach(function(element) {
    finalString += element + " ";
});

console.log(finalString);

// var gameCharacter = {
//   name: "Trabin",
//   class: "Dracon",
//   health: 100,
//   get title() {
//     return this.name + " the " + this.class;
//   },
//   set maxHealth(h) {
//     this.health = h;
//   },
//   xPos: 0,
//   items: ["Knife", "Food", "Leather Armor"],
//   move: function(x) {
//     this.xPos += x;
//   }
// };
// gameCharacter.title; // "Trabin the Dracon"
// gameCharacter.maxHealth = 150; // health = 150
// var health = gameCharacter.maxHealth; // undefined

// var name = gameCharacter.name;
// // var name = gameCharacter["name"];
//
// gameCharacter.items = ["Scimitar", "Bread"];
// gameCharacter.move(5);
// var x = gameCharacter.xPos;
//
// gameCharacter.yPos = 0;
// gameCharacter.move = function(x,y) {
//   this.xPos += x;
//   this.yPos += y;
// }

// var i = 5;
// var j = i;
// i = 10;
//
// var gc = gameCharacter;
// gc.name = "Trabin Di'Antillies"


function gameCharacter(name, xPos, health ){
this.name = name;
this.xPos = xPos;
this.health = health;
this.move = function(x) {
  this.xPos += x;
}
// this.class = "Dracon"
}

// var gameCharacter = {
//   name: "",
//   xPos: 0,
//   health: 100
// }

var gc1 = new gameCharacter("Trabin", 0, 100);
var name = gc1.name;
gc1.health = 150;
gc1.move(10);

var gc2 = new gameCharacter("Tinker", 5, 150);

console.log("gameCharacterOne", gc1);
console.log("gameCharacterTwo", gc2);

gameCharacter.prototype.class ="Dracon";
gc1.class = "Waffle";
gc2.class; //Dracon
console.log(gc1.class);
console.log(gc2.class);

var healy = function(amount) {
  this.health += amount;
}

gameCharacter.prototype.healy = healy; // Adds to gameCharacter object.
gc1.healy(5);
gc2.healy(10);

class GameCharacter {
  constructor(name, xPos, health ){
  this.name = name;
  this.xPos = xPos;
  this.health = health;
};
  move(x) {
    this.xPox += x;
  };
};

var gc3 = new GameCharacter('Trabin', 0, 100);
console.log(gc3.move(5));
console.log(gc3.name);

class HumanCharacter extends GameCharacter {
  constructor(name, xPos, health) {
    super(name, xPos, health);
    this.classification = "Human";
  };
};

var hc1 = new HumanCharacter('Cal', 0, 100);
console.log(hc1);
