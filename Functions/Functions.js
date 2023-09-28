// // Functions
//
// // Write Reusable Code with Function - Funktsiya bilan qayta foydalanish mumkin bo'lgan kodni yozing
//
// function ourReusableFunction(){
//     console.log("Hello World");
// }
//
// ourReusableFunction();
// ourReusableFunction();
//
//
//
// // Passing Values to Functions with Arguments - Argumentli funksiyalarga qiymatlarni uzatish
//
// function ourFunctionsWithArg(a, b) {
//     console.log(a - b);
// }
// ourFunctionsWithArg(3, 5)
//
//
//
// // Global Scope and Function - Global doirasi va funktsiyasi
//
// // declare your variable here
// var myGlobal = 10;
//
// function func1() {
//     // Assign 5 to oopsGlobal here
//     oopsGlobal = 5;
// }
//
// function func2() {
//     var output = "";
//     if (typeof myGlobal != 'undefined'){
//         output += "myGlobal: " + myGlobal;
//     }
//     if (typeof oopsGlobal != "undefined"){
//         output += "\n oopsGlobal: " + oopsGlobal;
//     }
//     console.log(output)
// }
// func1();
// func2();
//
//
//
// // Local Scope and Functions - Mahalliy qamrov va funksiyalar
//
// function myLocalScope() {
//     var myVar = 5;
//     console.log(myVar);
// }
// myLocalScope()
//
//
//
//
// // Global vs Local Scope in Functions - Funksiyalarda global va mahalliy qamrovi
//
// var outerWear = "T-Shirt";
//  function myOutFit() {
//      var outerWear = "sweater";
//
//      return outerWear;
//  }
//
//  console.log(myOutFit());
//  console.log(outerWear);
//
//
//
// // Return a Value from a Function with return - Qaytish bilan funktsiyadan qiymatni qaytaring
//
// function minusSix(num){
//     return num - 7;
// }
// console.log(minusSix(10))
//
//
// function timeFive(num){
//     return num * 5;
// }
// console.log(timeFive(4))
//
//
//
// // Understanding Undefined Value Returned from a Function - Funktsiyadan qaytarilgan aniqlanmagan qiymatni tushunish
//
// var sum = 0;
// function addThree() {
//     sum = sum + 3;
// }
//
// console.log(addThree(4)) // error undefined
//
//
// function addFive(){
//     sum = sum + 5;
// }
//
//
//
//
// // Assignment with a Returned Value - Qaytarilgan qiymat bilan tayinlash
//
// var changed = 0;
//
// function change(num){
//     return (num + 5) / 3;
//
// }
//
// changed = change(10);
//
// console.log(changed)
//
// var processed = 0;
//
// function processArg(num){
//     return (num + 3) / 5;
// }
//
// processed = processArg(7);
//
// console.log(processed)
//
//
//
// // Stand in Line - Navbatda turish
//
// function nextInLine(arr, item) {
//     arr.push(item)
//     return arr.shift();
// }
//
// var testArr = [1,2,3,4,5];
//
// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));
//
//

// Write Concise Declarative Functions - Qisqa deklarative funksiya

const bicycle = {
    gear: 2,
    setGear (newGear) {
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear)
