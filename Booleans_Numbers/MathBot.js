// Practicing about different Math methods

const botName = "MathBot";
const greeting = `Hi there! My name is ${botName} and I am here to teach you 
about the Math Object!`;

console.log(greeting);


console.log("The Math.random() method returns a pseudo random number between 0 and less than 1.");

// generating random number with Math.random()

const randomNum = Math.random();
console.log(randomNum)

//generating random number between two values

console.log("Now, generate a random number between two values.");

const min = 1;
const max = 100;

const randomNum2 = Math.random() * (max - min) + min;
console.log(randomNum2);


// Working with Math.floor()
console.log("The Math.floor() method rounds the value down to the nearest whole integer.");

const numRoundedDown = Math.floor(6.7);
console.log(numRoundedDown);


//Working with Math.ceil()
console.log("The Math.ceil() method rounds the value up to the nearest whole integer.");

const numRoundedUp = Math.ceil(4.2);
console.log(numRoundedUp);


//Working with Math.round()
console.log("The Math.round() method rounds the value to the nearest whole integer.");

const numRounded = Math.round(2.7);
console.log(numRounded);

const numRounded2 = Math.round(11.2);
console.log(numRounded2);


//Working with Math.max() and Math.min()

console.log("The Math.max() and Math.min() methods are used to get the maximum and minimum from a range.");

const maxNum = Math.max(3,124, 33,22);
console.log(maxNum);

const minNum = Math.min(5, 2, 90, 13);
console.log(minNum);



console.log("It was fun learning about the different Math methods with you!")