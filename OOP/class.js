// class

class User {
    constructor(name, lastName, age) {
        this.name = name
        this.lastName = lastName
        this.age = new Date(age)
    }

    getBirthdayYear() {
        return this.age.getFullYear()
    }

    getFullName() {
        return `${this.name} ${this.lastName}`
    }
}

// Instans Obyekt
const user1 = new User('Lazizbek', 'Mirsobitov', 21)
const user2 = new User('Siroch', 'Mirsobitov', 21)

console.log(user1)
console.log(user2)
console.log(user2.getBirthdayYear())