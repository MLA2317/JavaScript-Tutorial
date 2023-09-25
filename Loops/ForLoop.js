// for loop

for (let i = 0; i < 8; i++){
    console.log(i)
}


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

for (let i = 0; i < books.length; i++){
    console.log(books[i].title)
}

// for of loop
for (let book of books){
    console.log(book.title)
}