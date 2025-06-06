// Basic shopping list using arrays method such as push, pop, shift and unshift

console.log("Grocery shopping list");

const shoppingList = [];

console.log("It will be nice to have some fruit to eat.");

// push method
shoppingList.push("Apples");


function getShoppingListMsg(arr){
    return "Current Shopping List: " + arr;
}

console.log(getShoppingListMsg(shoppingList));


shoppingList.push('Grapes');

console.log(getShoppingListMsg(shoppingList));


console.log("It looks like we need to get some cooking oil.");


// unshift method to add item at beginning of array

shoppingList.unshift("Vegetable Oil");

console.log(getShoppingListMsg(shoppingList));


// using push method to add multiple items at the end of an array

shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");

console.log(getShoppingListMsg(shoppingList));


console.log("This looks like too much junk food.");

// pop method to remove element from end of the arrary

shoppingList.pop();

console.log(getShoppingListMsg(shoppingList));


// adding more items at beginning using unshift

console.log("It might be nice to get a dessert.");

shoppingList.unshift("Chocolate Cake");
console.log(getShoppingListMsg(shoppingList));


//removing element at the beginning using shift

console.log("On second thought, maybe we should be more health conscious.");

shoppingList.shift();

shoppingList[0] = "Canola Oil";

console.log(getShoppingListMsg(shoppingList));