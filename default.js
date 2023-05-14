// Created on iPad.

console.log("Hello, World!")
const usersList = [
    //all homework js 2
    // Calculate the number of chocolates and change
function calculateChocolatesAndChange() {
  const walletAmount = parseFloat(prompt("Enter the amount of money in your wallet:"));
  const chocolatePrice = parseFloat(prompt("Enter the price of one chocolate bar:"));

  const numChocolates = Math.floor(walletAmount / chocolatePrice);
  const change = walletAmount % chocolatePrice;

  console.log("You can buy " + numChocolates + " chocolate(s).");
  console.log("You will have " + change.toFixed(2) + " change left.");
}

// Reverse a three-digit number
function reverseThreeDigitNumber() {
  const number = parseInt(prompt("Enter a three-digit number:"));
  const reversedNumber = (number % 10) * 100 + Math.floor((number / 10) % 10) * 10 + Math.floor(number / 100);

  console.log("Reversed number: " + reversedNumber);
}

// Call the functions
calculateChocolatesAndChange();
reverseThreeDigitNumber();
//31 lesson
let age = parseInt(prompt("Please enter your age:"));

if (isNaN(age)) {
  console.log("Invalid input. Please enter a valid age.");
} else if (age >= 0 && age <= 11) {
  console.log("You are a child.");
} else if (age >= 12 && age <= 17) {
  console.log("You are a teenager.");
} else if (age >= 18 && age <= 59) {
  console.log("You are an adult.");
} else if (age >= 60) {
  console.log("You are a pensioner.");
} else {
  console.log("Invalid age entered.");
}

let number = parseInt(prompt("Please enter a number from 0 to 9:"));

if (isNaN(number) || number < 0 || number > 9) {
  console.log("Invalid input. Please enter a number between 0 and 9.");
} else {
  let specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "("];
  let specialChar = specialChars[number];
  console.log("Special character:", specialChar);
}
let startNumber = parseInt(prompt("Please enter the start number:"));
let endNumber = parseInt(prompt("Please enter the end number:"));
let sum = 0;

if (isNaN(startNumber) || isNaN(endNumber)) {
  console.log("Invalid input. Please enter valid numbers.");
} else {
  for (let i = startNumber; i <= endNumber; i++) {
    sum += i;
  }
  console.log("Sum of numbers:", sum);
}
function findGCD(a, b) {
  if (b === 0) {
    return a;
  }
  return findGCD(b, a % b);
}

let num1 = parseInt(prompt("Please enter the first number:"));
let num2 = parseInt(prompt("Please enter the second number:"));

if (isNaN(num1) || isNaN(num2)) {
  console.log("Invalid input. Please enter valid numbers.");
} else {
  let gcd = findGCD(num1, num2);
  console.log("Greatest Common Divisor:", gcd);
}
let number = parseInt(prompt("Please enter a number:"));

if (isNaN(number)) {
  console.log("Invalid input. Please enter a valid number.");
} else {
  let divisors = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }
  console.log("Divisors:", divisors);
}
let number = parseInt(prompt("Please enter a five-digit number:"));

if (isNaN(number) || number < 10000 || number > 99999) {
  console.log("Invalid input. Please enter a valid five-digit number.");
} else {
  let reverse = parseInt(number.toString().split('').reverse().join(''));
  if (number === reverse) {
    console.log("The number is a palindrome.");
  } else {
    console.log("The number is not a palindrome.");
  }
}
//32 lesson
 function isPerfectNumber(num) {
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
}
function findPerfectNumbersInRange(min, max) {
  let perfectNumbers = [];
  for (let i = min; i <= max; i++) {
    if (isPerfectNumber(i)) {
      perfectNumbers.push(i);
    }
  }
  return perfectNumbers;
}
let perfectNumbers = findPerfectNumbersInRange(1, 1000);
console.log(perfectNumbers); // outputs [6, 28, 496]

//33 lesson
const time = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  
  displayTime: function() {
    let formattedHours = this.formatTime(this.hours);
    let formattedMinutes = this.formatTime(this.minutes);
    let formattedSeconds = this.formatTime(this.seconds);
    console.log(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
  },

  formatTime: function(value) {
    return value.toString().padStart(2, '0');
  },

  addSeconds: function(seconds) {
    let totalSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds + seconds;
    this.hours = Math.floor(totalSeconds / 3600) % 24;
    this.minutes = Math.floor((totalSeconds % 3600) / 60);
    this.seconds = totalSeconds % 60;
  },

  addMinutes: function(minutes) {
    this.addSeconds(minutes * 60);
  },

  addHours: function(hours) {
    this.addSeconds(hours * 3600);
  }
};

// Example usage:
time.hours = 20;
time.minutes = 59;
time.seconds = 45;

time.displayTime(); // Outputs: 20:59:45

time.addSeconds(30);
time.displayTime(); // Outputs: 20:59:75

time.addMinutes(1);
time.displayTime(); // Outputs: 21:00:15

time.addHours(1);
time.displayTime(); // Outputs: 22:00:15

//34 lesson
const shoppingList = [
  { product: 'Apple', quantity: 2, price: 1.5 },
  { product: 'Banana', quantity: 3, price: 0.5 },
  { product: 'Orange', quantity: 1, price: 2 },
];

function removeProduct(list, productName) {
  const newList = list.filter(item => item.product !== productName);
  return newList;
}

function addPurchase(list, productName, quantity, price) {
  let productExists = false;
  const newList = list.map(item => {
    if (item.product === productName) {
      item.quantity += quantity;
      item.price = price;
      productExists = true;
    }
    return item;
  });

  if (!productExists) {
    newList.push({ product: productName, quantity, price });
  }

  return newList;
}

// Example usage:
console.log('Shopping List:', shoppingList);

// Remove 'Banana' from the list
const updatedList = removeProduct(shoppingList, 'Banana');
console.log('Updated List:', updatedList);

// Add 2 more 'Apple' to the list (quantity will be increased to 4)
const updatedList2 = addPurchase(updatedList, 'Apple', 2, 1.5);
console.log('Updated List 2:', updatedList2);

// Add a new product 'Grapes' to the list
const updatedList3 = addPurchase(updatedList2, 'Grapes', 5, 3);
console.log('Updated List 3:', updatedList3);

//35 lesson index(2).html
//36 lesson index(3).html
//37 lesson


    





