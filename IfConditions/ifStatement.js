// If condition

let a = 5

if(a === 5) {
    console.log('a teng 5')
}

// agar a o'zgaruvchini qaytatan takrorlab ishlatmoqchi bo'lsa let yo'zish shartmas
a = 5
/* === va == -> farqlari === -> bu qiymatlariniyam va type larniyam tekshiradi yoki == -> bu faqat qiymatni tekshiradi */
if(a === 5){
    console.log('a teng 5')
}else if(a > 5) {
    console.log('a 5 dan katta')
}else {
    console.log('a beshdan kichik')
}


let b = 4;
let c = 6

if(b === 3 || c === 6){  /* || yoki manoda keladi */
    console.log('a teng 5')
}


if(b === 4 && c === 6){  /* || va manoda keladi */
    console.log('a teng 5')
}