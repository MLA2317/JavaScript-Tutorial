`Array - o'z ichida ko'plab o'zgaruvchilarni qabul qiladigan o'zgaruvchi`

const arr = new Array(1,2,3,4)

console.log(arr)


const cars = ['BMW', 'AUDI', 'MERCEDES']

console.log(cars.push('Chevy'))
cars[4] = 'TESLA'
cars.unshift('FORD') /* 0 chi elementga otkazib qoyadi */
cars.pop() /* Oxirgi index ni ochirvoradu */

console.log(Array.isArray(cars)) /* bu boolean ni bajarib beradi true or false */
console.log(Array.isArray(12))  /* bu false chunki 12 mavjud emas */
console.log(cars.indexOf('Chevy')) /* Qaysi elementni joylashganligini ko'rsatib beradi */
console.log(cars.length) /* Massiv ni uzunligini chiqarib beradi */
console.log(cars[0]) /* 0 chi elementga otkazib qoyadi */
console.log(cars.reverse()) /* Teskari tartibda chiqaradi */

const books = ['Strategy', 'Businness']
console.log(cars.concat(books)) /* bu tepadagu massive bn qoshib qoydi */

console.log(cars)
