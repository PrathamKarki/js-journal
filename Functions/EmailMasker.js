// Email Masker using functions and various technique should as slice, indexOf, repeat

let email = "prathamkarki21@gmail.com";


function emailMasker(email){

    let charBeforeSymbol =  email.slice(0, email.indexOf('@'));

    let charAfterSymbol = email.slice(email.indexOf("@"));

    let firstChar =  charBeforeSymbol.slice(0,1);

    let lastChar = charBeforeSymbol.slice(-1);

    let replacingText = charBeforeSymbol.slice(1,-1);


    let replaceWithStar = '*'.repeat(replacingText.length);


  return  firstChar + replaceWithStar + lastChar + charAfterSymbol;
}


let result = emailMasker(email);

console.log(result);
