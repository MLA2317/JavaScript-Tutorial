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
// // Comparison with the Equality Random - Tenglik operatori bilan taqqoslash
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
// // Comparison with the Strict Equality Random - Qattiq tenglik operatori bilan taqqoslash
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
// // Comparison  with the Inequality Random - Tengsizlik operatori bilan taqqoslash
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
// // Comparison with the Strict Inequality Random - Qattiq tengsizlik operatori bilan taqqoslash
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
// // Comparisons with the Logical and Random - Mantiqiy va operator bilan taqqoslash
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
// // Comparisons with the Greater Than or Equal TO Random - Random Katta yoki Teng  bo'lgan bilan taqqoslash
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
// // Comparison with the Less than Random - Less than Random bilan taqqoslash
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
// // Comparison with the Less than or Equal To Random - Kichik yoki teng operatorlar bilan taqqoslash
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



// And & Or Random

// Comparisons with the Logical And Random - Mantiqiy va operator bilan taqqoslash

function testLogicalAnd(val) {
    if(val <= 50 && val >= 25) {
        return "Yes"
    }
    return "No"
}

console.log(testLogicalAnd(33))


//  Comparisons with the Logical Or Random -  Mantiqiy yoki operator bilan taqqoslash

function testLogicalOr(val){
    if(val < 10 || val > 20) {
        return "Inside"
    }
    return "Outside"
}

console.log(testLogicalOr(15))




// Else Statements - Aks Holda bayonotlar

function testElse(val){
    var result = "";

    if(val > 5){
        result = "Bigger than 5";
    } else{
        result = "5 or Smaller";
    }
    return result;
}
console.log(testElse(6))



// Else If Statement

function testElseIf(val){
    if(val > 10){
        return "Greater than 10";
    } else if(val < 5){
        return "Smaller than 5";
    } else{
        return "Between 5 and 10";
    }
}
console.log(testElseIf(8))


// Logical Order in If ELse Statements

function ordermyLogic(val){
    if(val < 5){
        return "Less than 5";
    } else if (val < 10){
        return "Less than 10";
    } else{
        return "Greater than or equal to 10";
    }
}
console.log(ordermyLogic(12))



// Chaining If ELse Statements

function testSize(val){
    if(val < 5){
        return "Tiny";
    }else if(val < 10){
        return "Small";
    }else if(val < 15){
        return "Medium";
    }else if(val < 20){
        return "Large";
    }
    return "Huge"
}
console.log(testSize(15))



// Golf code

var names = ["Hole in one", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go, Home"]

function golfScore(par, strokes){
    if(strokes == 1){
        return names[0];
    }else if(strokes <= par - 2){
        return names[1];
    }else if(strokes == par - 1){
        return names[2];
    }else if(strokes == par){
        return names[3];
    }else if(strokes == par + 1){
        return names[4];
    }else if(strokes == par + 2){
        return names[5];
    }else if(strokes == par + 3){
        return names[6]
    }
}

console.log(golfScore(3, 6))



// Switch Statements

// const readline = require('readline');
//
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


// function caseInSwitch(val){
//     console.log("Enter number between 1  4")
//     var answer = "";
//     switch (val){
//         case 1:
//             answer = "alpha";
//             break;
//         case 2:
//             answer = "beta";
//             break;
//         case 3:
//             answer = "gamma";
//             break;
//         case 4:
//             answer = "delta";
//             break;
//
//         default:
//             answer = "Invalid choice!";
//             break;
//
//     }
//     return answer;
// }
//
// rl.question("Enter a number between 1 and 4: ", function(input) {
//     const val = parseInt(input);
//     console.log(caseInSwitch(val));
//     rl.close();
// });


function caseInSwitch(val){
    console.log("Enter number between 1  4")
    var answer = "";
    switch (val){
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;

    }
    return answer;
}
console.log(caseInSwitch(3))




// Default Option in Switch Statements - Swith bayonotlaridagi standart varianti

function switchOfStuff(val){
    var answer = "";
    switch (val){
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break
    }
    return answer;
}
console.log(switchOfStuff("c"))




// Multiple Identical Options in Switch Statements - Switch bayonotlarida bir nechta bir xil variantlar

function sequentialSizes(val){
    var answer = "";
    switch (val){
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break
        case 7:
        case 8:
        case 9:
            answer = "High";
            break
    }
    return answer;
}
console.log(sequentialSizes(3))




// Replacing If Else Chains with Switch - If else zanjirlarini kalit bn almashishtirish

function chainsToSwitch(val){
    var answer = "";

    // if(val === "bob") {
    //     answer = "Siroch";
    // } else if(val === 21){
    //     answer = "The Answer";
    // } else if(val === 1) {
    //     answer = "There is no #1";
    // } else if(val === 99){
    //     answer = "Missed me by this much";
    // } else if(val === 7){
    //     answer = "Good";
    // }
    // return answer

    switch (val){
        case "bob":
            answer = "Siroch";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much";
            break;
        case 7:
            answer = "Good";
            break;
    }
    return answer
}
console.log(chainsToSwitch("bob"))





// Returning Boolean Values from Function - Funksiya mantiqiy qiymatlarni qaytarish


function isLess(a, b){
    return a < b;
}
console.log(isLess(3,4))



// Returning Early Pattern from Function - Funksiyalardan dastlabki namunani qaytarish

 function abTest(a, b){
    if (a < 0 || b < 0){
        return undefined;
    }
    return  Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
 }
 console.log(abTest(2, 2))




// Counting Cards - hisoblash kartalari

var count = 0;

function cc(card){
    switch (card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "H":
        case "Q":
        case "A":
            count--;
            break
    }
    var holdbet = "Hold";
    if(count > 0) {
        holdbet = "Bet"
    }

    return count + " " + holdbet;
}

cc(2); cc('H'); cc(10); cc('H'); cc('A');
console.log(cc(4))


