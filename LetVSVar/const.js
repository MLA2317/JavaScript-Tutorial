// const


// Declare a Read-Only Variable with the const Keyword - const kalit so'zi bn faqat oqiladigan ozgaruvchi elon qilish

function printManyTimes(str) {
    "use strict";

    const SENTENCE = str + " is cool";
    console.log(str.length)
    for(let i = 0; i < str.length; i+=2){

        console.log(SENTENCE);
    }
}
printManyTimes("JavaScripts")




// Mutate an Array Declared with const - const bn elon qilingan massivni ozgartirish

const s = [5,7,12];
function editInPlace(){
    "use strict";

    s[0] = 2;
    s[1] = 5;
    s[2] = 15
}
editInPlace();
console.log(s)



// Prevent Object Mutation - Ob'ekt mutatsiyasini oldini olish

function freezeObj(){
    const MATH_CONSTANT = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANT);

    try {
        MATH_CONSTANT.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANT.PI;
}
// Konsolga xato chiqadi, chunki muzlatilgan ob'ektga yangi qiymat berish mumkin emas.
// PI o'zgaruvchisi 3.14 qiymatini oladi, chunki MATH_CONSTANT.PI ni o'zgartirishga harakat qilganingizda hech qanday o'zgarish amalga oshirilmadi.

const PI = freezeObj();




// Use Arrow Functions to Write Concise Anonyms Functions - Anonims Funksiyalarni qisqacha yozish uchun o'q funksiyalardan foydalanish

var magic = function() {
    return new Date();
}

// => bu function ni orniga
var magic = () => new Date();



// Write Arrow Functions with Parameters - Parametrli o'q funksiya yozish

// without arrow
var myConcat1 = function (arr1, arr2) {
    return arr1.concat(arr2);
};
console.log(myConcat1([1,2], [3,4,5]))

// with arrow
var myCancat2 = (arr1, arr2) => arr1.concat(arr2);
console.log(myCancat2([1, 2], [3,4,5]))



// Write Higher Order Arrow Function - Yuqori tartibli o'q funksiyalari

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers)




// Write Higher Order Arrow Function - Yuqori tartibli o'q funksiyalari

const increment = (function (){
    return function increment(number, value = 1) {
        return number + value;
    }
})();
console.log(increment(5, 2))
console.log(increment(5))



// Use the Rest Operator with Function Operator - Funksiya parametrlari bilan dam olish operatorlari

const sum = (function () {
    return function num(...args){ // ...args - bu massive
        return args.reduce((a, b) => a + b, 0); //reduce - massiv ichidagini birlashtirib yoki yegib beradi
    };
})();
console.log(sum(1,2,3,4,5))



// Use the Spread Operator to Evaluate Arrays In-Place - Massivlarni joyida baholash uchun Spread operatoridan foydalanish

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function (){
    arr2 = [...arr1]; // ... - bu massive
    arr1[0] = 'potato'
})();
console.log(arr2);



// Use Destructuring Assignment to Assign Variables from Object - Obyektlardan ozgaruvchilarni tayinlash uchun tuzilmalar buzish topshirigi

