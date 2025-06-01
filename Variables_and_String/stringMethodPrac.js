// Basic string method pratice such as charCodeAt, fromCharCode, includes, replace and slice

// Getting character code of a letter
let letter = 'Z';
let characterCode = letter.charCodeAt(0);
console.log(characterCode);


//check if word includes a substring
let sentence = "I love learning JavaScript at night!";
console.log(sentence.includes("JavaScript"));

//Replace a word in a sentence
let words = "Coding is boring.";
console.log(words.replace("boring", "fun"));

// find char codes of each letter

let oneWord = "Dog";

console.log(oneWord[0].charCodeAt(0));
console.log(oneWord[1].charCodeAt(0));
console.log(oneWord[2].charCodeAt(0));

//Slice "Java" from "Javascript"

let language = "Javascript";
console.log(language.slice(0,4));


//slice last three characters 
let profession = "Developer";
console.log(profession.slice(-3));