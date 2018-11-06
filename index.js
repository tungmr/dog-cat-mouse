var Dog = require ("./Dog");
var Cat = require ("./Cat");


var dogA = new Dog("Husky");
var catA = new Cat("Tom");

dogA.eat(catA);

console.log(dogA);