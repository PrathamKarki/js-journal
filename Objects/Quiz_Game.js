/* 
    Building a quiz Game with Arrays and Objects in JS
    along with functions and randomly selecting questio and answer from an array and compare them 
*/

const questions = [
    {
        category:  'science',
        question:  'Which of these is a gas at room temperature?',
        choices:   ['Carbon', 'Oxygen', 'Mercury'],
        answer : 'Oxygen',
    },

    {
        category: 'Computer Science',
        question: 'Which language is primarily used to style web pages?',
        choices: ['HTML', 'CSS', 'Python'],
        answer: 'CSS',

    },

    {
        category: 'geography',
        question: 'Which is the largest continent by area?',
        choices: ['Africa', 'Asia', 'North America'],
        answer: 'Asia',

    },

    {
        category: 'history',
        question: 'Who was the first President of the United States?',
        choices: ['George Washington', 'Abraham Lincoln', 'John Adams'],
        answer: 'George Washington',

    },

    {
        category: 'math',
        question: 'What is the value of π (pi) approximately?',
        choices: ['3.14', '2.17', '1.62'],
        answer: '3.14',

    }
];


// function to get randomQuestion 

function getRandomQuestion(questions){

    let randomIndex = Math.floor(Math.random() * questions.length);

    let randomQuestion = questions[randomIndex];

    return randomQuestion;

}


// function to get randomComputerChoice

function getRandomComputerChoice(choices){
    let randomId = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomId];

    return computerChoice;
}

// function to get Result

function getResults(questions, computerChoice){

    if(computerChoice === questions.answer){
        return "The computer's choice is correct!"
    } 
    else {
        return "The computer's choice is wrong. The correct answer is: " + questions.answer;
    }

}

// calling the functions

const question = getRandomQuestion(questions);
console.log(question);

const computerChoice = getRandomComputerChoice(question.choices);
console.log(computerChoice)


const result = getResults(question, computerChoice);
console.log(result);

console.log("Category: ", question.category);
console.log("Question:", question.question);
console.log('Choices: ', question.choices.join(", "));

console.log("Computer's choice is: ", computerChoice);

console.log(result);