// OOP - Konstruktor funksiyalar

// 1 - uslub
function User(name, lastName, age) {
    this.name = name
    this.lastName = lastName
    this.age = age
}

// Instans obyekt
const user1 = new User('Lazizbek', 'Mirsobitov', 22)
const user2 = new User('Siroch', 'Mirsobitov', 21)
console.log(user1)
console.log(user2.name)




// 2 - uslub
function User1(name, lastName, age) {
    this.name = name
    this.lastName = lastName
    this.age = new Date(age)
    //this.age = age
    // this.getBirthday = function(){
    //     return this.age.getFullYear()
    // }
    // this.getFullName =  function (){
    //     return `${this.name} ${this.lastName}`
    // }
}

User1.prototype.getBirthdayYear = function (){
    return this.age.getFullYear()
}

User1.prototype.getFullName = function (){
    return `${this.name} ${this.lastName}`
}


// Instans obyekt
const user3 = new User1('Lazizbek', 'Mirsobitov', 22)
const user4 = new User1('Siroch', 'Mirsobitov', 21)
console.log(user3)
console.log(user4.age)
console.log(user4.getBirthdayYear())
console.log(user4.getFullName())