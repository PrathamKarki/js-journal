/**
 * Building a simple sentence analyzer app (console based)
 * To understand the working of loops in javascipt.
 * Here, we will take sentence and get count for no. of vowels, words, consonants
 */

const getVowelsCount = (sentence) =>{

    let count = 0;
    const vowels = 'aeiou';
    
    for(let chars of sentence.toLowerCase()){
        if(vowels.includes(chars)){
            count++;
        }
    }
    return count;
}

let vowelCount = getVowelsCount("Apples are tasy fruits");

console.log("Vowel Count: " + vowelCount);



// function for consonantCount 

const getConsonantCount = function(sentence){
 
    let count = 0;
    const vowels = 'aeiou';
    
    for(const chars of sentence.toLowerCase()){
        if(!vowels.includes(chars) && chars >='a' && chars <='z'){
            count ++;
        }
    }

    return count;
}

const consonantCount = getConsonantCount("Coding is fun right");
console.log("Consonant Count: " + consonantCount);


// function for punctuations count

function getPunctuationCount(sentence){

    let count = 0;
    const punctuation = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;

    for(const chars of sentence.toLowerCase()){
        if(punctuation.includes(chars)){
            count ++;
        }
    }
    return count;
}

const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?!");
console.log(`Punctuation count: ${punctuationCount}`);



// function for words count

function getWordCount(sentence){

    const words = sentence.split(" ");
    let count = 0;


    for(const word of words){
        if(word !== ''){
            count++;
        }
    }

    return count;
    
}

const wordCount = getWordCount("I love freeCodeCamp.");

console.log(`Word Count: ${wordCount}`)