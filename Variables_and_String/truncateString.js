// write function that truncates a string
/*  function takes two args str and num 
    if length of string is greater than num , then we truncate it so that it is equal 
    the given num, and ... should be appended at the end of truncated string 
*/

const truncateString = (str, num) =>{
    if(str.length > num){
        return str.slice(0, num) + "...";
    } else {
        return str;
    }
}

let result = truncateString('appleIsGoodFoodMan', 4);

console.log(result);