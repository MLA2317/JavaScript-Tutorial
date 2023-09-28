// let and var



//  Differences Between the var and let keywords - Var va let kalit so'zlari ortasidagi farqlari

let catName = "Maks";
let quote;

catName = "Misha";

function catTalk() {
    "use strict";

    catName = "Oliver";
    console.log(quote = catName + " says Meow!");
}

catTalk();




// Compare Scopes of the var and let keywords - Var doiralarini solishtirish va kalit sozlariga ruxsat bering

function checkScope() {
    "use strict"
    let i = "function scope";
    if(true){
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i
}
checkScope();