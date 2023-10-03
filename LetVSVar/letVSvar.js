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






// function main(){
//     if (true){
//         let name = "gimmic" // let faqat if ga tegishli bolgani uchun tashqaridisi oqimidi
//     }
//     console.log(name)
// }
// main()


function mains(){
    if (true){
        var names = "gimmic" // var funksiyani ichidagilarni oqi oladi funksiyadan tashqari oqi olomidi
    }
    console.log(names)
}
mains()



function main() {
    for (let i = 0; i < 100; i++){
        console.log(i + 1) // it's worked let doim ozini ichida blokida ishlatolimz
    }
    // console.log(i + 1) // it's error
}
main()


function mains(){
    for (var i = 0; i < 100; i++){

    }
    console.log(i) // var blockdan tashqari ishlay oladi
}
mains()