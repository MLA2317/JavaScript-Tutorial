
// Use the Conditional (Ternary) Operator - Shartli (Uchlik) Operator foydalaning

function checkEqual(a, b) {
    // if(a === b){
    //     return true;
    // }
    // else {
    //     return false;
    // }
    return a === b ? console.log('a is equal b') : console.log('a is not equal b');

}
checkEqual(2, 2);




// Use Multiple Conditional (Ternary) Operator - bir nechta satrlar (uchlik) operatorlardan foydalanish


function checkSign(num){
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"

}

console.log(checkSign(-10))