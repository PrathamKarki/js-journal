/* Working with Arrays and random numbers to build luch picker program
    Here we will add, remove lunches item from array and randomly select a lunch
*/


const lunches = [];

function addLunchToEnd(arr, str){
    arr.push(str);
    console.log (str + " added to the end of the menu.");
    return arr;
}


function addLunchToStart(arr, str){
    arr.unshift(str)
    console.log (str + " added to the start of the menu.");
    return arr;
}


function removeLastLunch(arr){
    
    if( arr.length !== 0){
        let popped  = arr.pop();
        console.log( popped + " removed from the end of the lunch menu.");
    } else {
        console.log("No lunches to remove.");
    }
   return arr;
}


function removeFirstLunch(arr){

    if(arr.length !== 0){
        let removedFirst = arr.shift();
        console.log (removedFirst + " removed from the start of the lunch menu.");
    } else {
        console.log ("No lunches to remove.");
    }

    return arr;
}


function getRandomLunch(arr){
   
    if(arr.length !== 0){
         let randomIndex = Math.floor(Math.random() * arr.length);
         let randomVal = arr[randomIndex];
        console.log ("Randomly selected Lunch: " + randomVal);
    } else {
        console.log( "No lunches available.");
    }

    return arr;
}


function showLunchMenu(arr){
    if(arr.length !== 0){
        console.log("Menu items: " + arr.join(', '));
    } else {
        console.log("The menu is empty.");
    }
}

showLunchMenu(lunches);

addLunchToEnd(lunches, "Pizza");
addLunchToEnd(lunches, "Burger");
addLunchToStart(lunches, "Salad");
addLunchToStart(lunches, "Soup");

showLunchMenu(lunches);


removeLastLunch(lunches);
removeFirstLunch(lunches);


getRandomLunch(lunches);

removeFirstLunch(lunches);
removeLastLunch(lunches);

removeFirstLunch(lunches);

getRandomLunch(lunches)