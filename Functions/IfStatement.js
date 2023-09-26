// // if statement
//
//
// // Boolean Values
// function welcomeToBooleans(){
//     return false;
//     //return true;
// }
//
//
// // Use Conditional Logic with If statements
//
// function ourTrueOrFalse(isItTrue){
//     if(isItTrue) {
//         return "Yes, it is True"
//     }
//     return "No, it is False"
// }
//
// // ourTrueOrFalse(true)
// console.log(ourTrueOrFalse(true))
//
//
//
//
//
// // Comparison with the Equality Operator - Tenglik operatori bilan taqqoslash
//
// function testEqual(val){
//     if(val == 12) {
//         return "Yes, it is Equal"
//     }
//     return "No, it is not Equal"
// }
//
// console.log(testEqual(12))
//
//
//
//
// // Comparison with the Strict Equality Operator - Qattiq tenglik operatori bilan taqqoslash
// function testEqual(val){
//     if(val === 12) {
//         return "Yes, it is Equal"
//     }
//     return "No, it is not Equal"
// }
//
// console.log(testEqual(12))
//
// /*
// 3 == 3 or '3' it is True
// 3 === '3' it is false
// 3 === 3 true
//  */
//
//
//
// // Practice Comparing Different Values - Turli qiymatlarni solishtirishni mashq qiling
//
// function testEqual(a, b){
//     if(a == b) { // True
//         return "Yes, it is Equal"
//     }
//     return "No, it is not Equal"
// }
//
// console.log(testEqual(10, "10"))
//
// //
// function testEquals(a, b){
//     if(a === b) { // False
//         return "Yes, it is Equal"
//     }
//     return "No, it is not Equal"
// }
//
// console.log(testEquals(10, "10"))
//
//
//
//
// // Comparison  with the Inequality Operator - Tengsizlik operatori bilan taqqoslash
//
// //
// function testNotEqual(val){
//     if(val != 99) { // False
//         return "No, it is not Equal"
//     }
//     return "Yes, it is Equal"
// }
//
// console.log(testNotEqual(10))
//
//
//
// // Comparison with the Strict Inequality Operator - Qattiq tengsizlik operatori bilan taqqoslash
//
// function testStrictNotEqual(val){
//     if(val !== 17) { // False
//         return "No, it is not Equal"
//     }
//     return "Yes, it is Equal"
// }
//
// console.log(testStrictNotEqual(12))
//
//
//
// // Comparisons with the Logical and Operator - Mantiqiy va operator bilan taqqoslash
//
//
// function testGreaterThan(val){
//     if(val > 100) { // False
//         return "Over 100";
//     }
//     if (val > 10) {
//         return "Over 10";
//     }
//     return "10 or Under"
// }
//
// console.log(testGreaterThan(10))
//
//
//
// // Comparisons with the Greater Than or Equal TO Operator - Operator Katta yoki Teng  bo'lgan bilan taqqoslash
//
//
// function testGreaterOrEqual(val){
//     if(val >= 20) { // False
//         return "20 or Over";
//     }
//     if (val >= 10) {
//         return "10 or Over";
//     }
//     return "Less than 10"
// }
//
// console.log(testGreaterOrEqual(10))
//
//
//
// // Comparison with the Less than Operator - Less than Operator bilan taqqoslash
//
// function testLessThan(val){
//     if(val < 20) { // False
//         return "Under 20";
//     }
//     if (val < 55) {
//         return "Under 55";
//     }
//     return "55 or Over"
// }
//
// console.log(testLessThan(54))
//
//
//
// // Comparison with the Less than or Equal To Operator - Kichik yoki teng operatorlar bilan taqqoslash
//
// function testLessOrEqual(val){
//     if(val <= 12) {
//         return "Smaller than or equal to 12";
//     }
//     if (val <= 24) {
//         return "Smaller than or equal to 24";
//     }
//     return "More than 24"
// }
//
// console.log(testLessOrEqual(54))
