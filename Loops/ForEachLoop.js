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

// for each loop
books.forEach(function(book){
    console.log(book.title)
})