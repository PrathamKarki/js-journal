/* 
    Building a recipe tracker using Javascript Objects
*/

const recipes = [];


const recipe1 = {
    name: "Spaghetti Carbonara",
    ingredients : ['spaghetti', 'Parmesan cheese', 'pancetta', 'black pepper'],
    ratings : [4,5,4,5],
    cookingTime: 22,
    totalIngredients : null,
    difficultyLevel : "",
    averageRating: null,
}


const recipe2 = {
    name: 'Chicken Curry',
    ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
    ratings : [4,5,5,5],
    cookingTime: 42,
    totalIngredients: null,
    difficultyLevel: "",
    averageRating: null,
}

const recipe3 = {
    name: 'Vegetable Stir Fry',
    ingredients: ['broccoli', 'carrot', 'bell pepper'],
    cookingTime: 15,
    totalIngredients: null,
    difficultyLevel: '',
    ratings: [4,3,4,5],
    averageRating: null,
}


// now we push all the recipe 1 to 3 to the recipes array

recipes.push(recipe1, recipe2, recipe3);


// calculating the averageRating for the recipes

function getAverageRating(ratingArr){

    let sum = 0;

    for(let i=0; i< ratingArr.length; i++){
        sum += ratingArr[i];
    }
    let averageRating = sum/ratingArr.length;

    return averageRating;

}


// calculating the totalIngredients

const getTotalIngredients = function(totalIngred){

    return totalIngred.length;
}


// creating difficultyLevel function

const getDifficultyLevel = (num) =>{
    
    if(num <= 30){
        return "easy";
    } else if(num <= 60){
        return "medium";
    } else {
        return 'hard';
    }
}

// Testing for each function for recipe 1, recipe 2 and recipe 3
 
const recipe1AverageRating = getAverageRating(recipe1.ratings);
const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);

const recipe2AverageRating = getAverageRating(recipe2.ratings);
const recipe2TotalIngredients = getTotalIngredients(recipe2.ingredients);
const recipe2DifficultyLevel = getDifficultyLevel(recipe2.cookingTime);


const recipe3AverageRating = getAverageRating(recipe3.ratings);
const recipe3TotalIngredients = getTotalIngredients(recipe3.ingredients);
const recipe3DifficultyLevel = getDifficultyLevel(recipe3.cookingTime);


// updating values for averageRating, totalIngredinets and difficultyLevel for recipe1 and recipe2

recipe1.averageRating = recipe1AverageRating;
recipe1.totalIngredients = recipe1TotalIngredients;
recipe1.difficultyLevel =  recipe1DifficultyLevel;



recipe2.averageRating = recipe2AverageRating;
recipe2.totalIngredients = recipe2TotalIngredients;
recipe2.difficultyLevel =  recipe2DifficultyLevel;


recipe3.averageRating = recipe3AverageRating;
recipe3.totalIngredients = recipe3TotalIngredients;
recipe3.difficultyLevel =  recipe3DifficultyLevel;



console.log(recipes);