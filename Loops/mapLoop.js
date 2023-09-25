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

// map loop - map ni vazifasi yangi massive yaratishida
const bookTitles = books.map(function (book){ /* array da qaytaradu */
    return book.title
})

console.log(bookTitles)