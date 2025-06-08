## For ... of loops

for of loops are generally used to loop over values that  are iterables such as : strings and arrays basically

syntax: 

    for(let color of colors){
        //  code block to execute
    }

the color in the above syntax represent current value of iterable that is being looped.


## For ... in loops

for ... in loops are generally used to loop over properties of object.

syntax:

 for (variable in object){
    // code block to executed
 }

Note: A for... in loop is useful when we need to loop over properties of object.
It is not recommened to be used to loop over element of array.


## Break and Continue Statements in loop

A break statement is used to exit a loop early, while a continue statement is used to skip the current iteration of a loop and move to the next one.