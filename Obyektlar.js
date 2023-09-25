// Object

const user =  {
    name: 'Lazizbek',
    lastname: 'Mirsobitov',
    age: 21,
    hobbies: ['football', 'IT', 'Playstation'],
    address: {
        street: 'Gulzor',
        city: 'Tashkent'
    }
}

console.log(user)
console.log(user.age)
console.log(user.address.city)
console.log(user.hobbies[1])

const { name, lastname, age, address: { street}} = user

console.log(age, name, lastname, street)


user.email = 'mirsobitovv2317@gmail.com'

console.log(user)






const books = [
    {
        id: 1,
        title: 'JavaScript',
        isRead: false
    },
    {
        id: 2,
        title: 'Python',
        isRead: false
    },
    {
        id: 3,
        title: 'Java',
        isRead: false
    }
]

console.log(books)
console.log(books[1])




let booksJSON = JSON.stringify(books) /* Bu json formatda chiqarib beradi */
console.log(booksJSON)

const book2 =JSON.parse(booksJSON) /* Jsondi malumotni obyektga otkazadi */
console.log(book2)







