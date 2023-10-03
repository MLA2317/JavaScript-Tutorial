// Try catch


function showArray(array) {
    console.log(array.length)
    if (array.length) {
      return array.join(' ')
    } else {
      throw new Error("Malumot array bo'lishi kerak") // throw ishlagan payt undan keyingi kod ishlami tepaga chiqadi

    }
}
try { // urinib kor
    console.log(showArray(1))
} catch(error) { // agar xato chiqsa buni ber
    console.log(error.message)
    console.log(showArray([1, 2, 3, 4, 5]))
}
