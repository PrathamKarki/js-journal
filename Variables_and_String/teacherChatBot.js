// practice for template literals and indexOf method in string
console.log("Hi there!");

const botName = 'teacherBot';

let greeting = `My name is ${botName}.`;
console.log(greeting);

const subject = "Javascript";
const topic = "strings";

const sentence  =  `Today, you will learn about ${topic} in ${subject}.`
console.log(sentence);



// using length property on string
const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
console.log(strLengthIntro);

console.log(subject.length);


console.log(`Here is an example of using the length property on the word ${topic}`);
console.log(topic.length);

// accesing characters from a string
console.log(`Here is an example of accessing the first letter in the word ${subject}`);
console.log(subject[0]);

console.log(`Here is an example of accessing the second letter in the word ${subject}`);
console.log(subject[1]);


console.log(`Here is an example of accessing the last letter in the word ${subject}`);
const lastCharacter = subject[subject.length - 1];
console.log(lastCharacter);


// learning indexOf in strings
const learningIsFunSentence = "Learning is fun.";
console.log("Here are examples of finding the positions of substrings in the sentence.");
console.log(learningIsFunSentence.indexOf("Learning"));
console.log(learningIsFunSentence.indexOf('fun'));
console.log(learningIsFunSentence.indexOf("learning"));


//conclusion
console.log("I hope you enjoyed learning today.");