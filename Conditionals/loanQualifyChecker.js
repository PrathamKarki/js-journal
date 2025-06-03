// Conditional pratice using ternary operator comparison operators
// and mulitple conditions in an if statement

let minIncomeForDuplex  = 60000;
let minCreditScoreForDuplex = 700;

let minIncomeForCondo = 45000;
let minCreditScoreForCondo = 680;

let minIncomeForCar = 30000;
let minCreditScoreForCar = 650;


function getLoanMessage(annualIncome, creditScore){

    let loanQualify =  (annualIncome >= minIncomeForDuplex  && 
    creditScore >= minCreditScoreForDuplex) ?  "You qualify for a duplex, condo and car loan." : (annualIncome >= minIncomeForCondo && 
    creditScore >= minCreditScoreForCondo) ? "You qualify for a condo and car loan." : (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) ?
    "You qualify for a car loan." : "You don't qualify for any loans."

    return loanQualify;
}

let duplexLoanMsg = getLoanMessage(85000, 850);
let condoLoanMsg = getLoanMessage(65000, 690);
let carLoanMsg = getLoanMessage(45000, 660);
let noLoanMsg = getLoanMessage(25000, 550);


console.log(duplexLoanMsg);
console.log(condoLoanMsg);
console.log(carLoanMsg);
console.log(noLoanMsg);