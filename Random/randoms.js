// Generate Random Fractions - Tasodifiy kasirlarni yaratish

function randomFraction(){


    return Math.random();
}

console.log(randomFraction());


// Generate Random Fractions - Tasodifiy butun sonlar yaratish

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

    return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());



// Generate Random Whole Numbers within a Range - Bir diapozonda tasodifiy butun sonlar yaratish

function myRandomRange(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(myRandomRange(5,19))



// Use the ParseInt Function - parsent funksiyasi foydalanish

function convertToInteger(str){
    return parseInt(str, 2)
}

console.log(convertToInteger("10011"))



