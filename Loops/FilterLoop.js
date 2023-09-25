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

// filter loop - shart bajarilganligini qaytaradi, keraksiz elementladayam foydalanadi

const readedBooks = books.filter(function (book){
    return book.id !== 1
}).map(function(book){   /* . orqali davom etib ketsayam bo'ladi */
    return book.title
})

console.log(readedBooks)