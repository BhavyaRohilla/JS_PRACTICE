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

console.log(pizza1.toppings.size); // Output: false (Oops! Original also changed)

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


const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});


const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

const properties = Object.keys(restaurant);
console.log(properties);

for (const key of properties) {
  console.log(key);
}

const values = Object.values(restaurant);
console.log(values);
for (const value of values) {
  console.log(value);
}

// Entire Object
const entries = Object.entries(restaurant);
console.log(entries);
for (const [key, value] of entries) {
  console.log(`${key}: ${value}`);
}




const airline = "TAP Air Portugal";
const plane = "A320";
const passenger = "Bhavya";
console.log(airline.length);
console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 7)); // Air

console.log(airline.slice(0, airline.indexOf(" "))); // TAP
console.log(airline.slice(airline.lastIndexOf(" ") + 1)); // Portugal
console.log(airline.slice(-2)); // al
console.log(airline.slice(1, -1)); // AP Air Portuga
console.log(airline.slice(-1)); // l

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You got the middle seat!");
  } else {
    console.log("You got lucky!");
  }
};

checkMiddleSeat("11B"); // You got the middle seat!
checkMiddleSeat("23C"); // You got lucky!
checkMiddleSeat("3E"); // You got the middle seat!
checkMiddleSeat("3A"); // You got lucky!

console.log(new String("Bhavya").slice(1)); // h
console.log(typeof new String("Bhavya")); // object
console.log(typeof new String("Bhavya").slice(1)); // string
console.log(typeof new String("Bhavya").slice(1).length); // number

console.log(airline.toLowerCase()); // tap air portugal
console.log(airline.toUpperCase()); // TAP AIR PORTUGAL

// Fix capitalization in name
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); // Bhavya

// Comparing emails
const email = "hello@bhavya.io";
const loginEmail = "  HEllO@BhAvYa.Io \n";
const normalizedEmail = loginEmail.toLowerCase().trim();

console.log(email === normalizedEmail); // true

// Replacing
const priceGB = "288,97€";
const priceUS = priceGB.replace("€", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passenger come to boarding door 23. Boarding door 23!.";
console.log(announcement.replaceAll("door", "gate"));

// Booleans String Methods

const planes = "Airbus A320neo";
console.log(planes.includes("A320"));
console.log(planes.includes("Boeing"));
console.log(planes.startsWith("Airb"));

if (planes.startsWith("Airbus") && planes.endsWith("neo"))
  console.log("Part of the new airbus family");

//Practice Exercise

const checkBaggae = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun"))
    console.log("You are not allowed onboard");
  else {
    console.log("Welcome aboard");
  }
};

checkBaggae("I have a Laptop, some Food and a pocket Knife");
checkBaggae("Socks and Camera");
checkBaggae("Got some snacks and a gun for protection");

// Split and Join
console.log("a+very+nice+string".split("+"));
console.log("Bhavya Rohilla".split(" "));

const [firstName, lastName] = "Bhavya Rohilla".split(" ");
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(namesUpper.join(" "));
};

capitalizeName("jessica and smith davis");
capitalizeName("bhavya rohilla");

// Padding
const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(65489154566));
console.log(maskCreditCard("654891545668548545"));

// Repeat

const message2 = "Bad Weather... All Departues are Delayed....";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈️ ".repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);

///////////////////////////////////////
// String Methods Practice

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} ${getCode(from)} ${getCode(to)} (${time.replace(":", "h")})`.padStart(36);
  console.log(output);
}

*/
///////////////////////////////////////
// Coding Challenge #4

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

const camelcase = (name) => {
  const arr = name.split("_");
};

camelcase("underscore_case");
