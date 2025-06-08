/* 
 Create factorial calculator using conditionals and loops
 */

 const num = 12;

 const factorialCalculator = function(num){

    let result = 1;

    for(let i= 1; i<= num; i++){

        result *= i;
    }
    return result;
 }

 const factorial = factorialCalculator(num);

 const resultMsg = "Factorial of " + num + " is " + fatorial;

 console.log(resultMsg);