/* 
 Implementation of slice and splice by mergining of the 
 array 
*/

function frakenSplice(arr1, arr2, index){
    
    const copyArr1 = arr1.slice();

    const copyArr2 = arr2.slice();

     copyArr2.splice(index, 0, ...copyArr1);

    return copyArr2;

}


console.log(frakenSplice([1,2,3], ['apple', 'grapes', 'orange', 'tiger'], 3));

