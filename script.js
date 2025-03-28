"use strict";

/*
function calcAge(birthYear) {
  const age = 2025 - birthYear;
  //   console.log(firstName + " is " + age + " years old");
  function printAge() {
    const output = `${firstName} is ${age} years old`;
    console.log(output);
    if (age >= 18 && age <= 65) {
      const canDrink = "Drink water";
      console.log(canDrink);
    }
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = "Bhavya";
calcAge(2001);
*/

// Object references in practice (Shallow vs Deep Copy.)

const jessica1 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 23,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessica = marryPerson(jessica1, "Davis");

// console.log("Before : ", jessica1);
// console.log("After : ", marriedJessica);

const Jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 23,
  family: ["Alice", "Bob"],
};

// Shallow copy
const JessicaCopy = { ...Jessica };
JessicaCopy.lastName = "Davis";
console.log("Before : ", Jessica);
console.log("After : ", JessicaCopy);

// shallow copy
let pizza1 = {
  size: "Large",
  toppings: {
    cheese: true,
    pepperoni: true,
  },
};

// Creating a shallow copy
let shallowCopy = { ...pizza1 };

// Changing the toppings in the copy
shallowCopy.toppings.size = "medium";

console.log(pizza.toppings.size); // Output: false (Oops! Original also changed)

let pizza = {
  size: "Large",
  toppings: {
    cheese: true,
    pepperoni: true,
  },
};

// Creating a deep copy
let deepCopy = JSON.parse(JSON.stringify(pizza));

// Changing the toppings in the copy
deepCopy.toppings.cheese = false;

console.log(pizza.toppings.cheese); // Output: true (Original is safe!)
