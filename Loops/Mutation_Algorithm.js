/* 
  Iterating over two string and comparing their charcters
  Mutation Algorithm 
*/

function mutation(arr){
  const str1 = arr[0];
  const str2 = arr[1];

  for(let i=0; i<str2.length; i++){
    if(!str1.includes(str2[i])){
      return false;
    }
  }
  return true;
  
}

console.log(mutation(["helloWorld", "helloold"]));
console.log(mutation(["hello", "hey"]));
console.log(mutation(["Alien", "line"]))