// callBack

// callback(req, res)
//
// app.get('/', (req, res) => {
//     res.send("OK")
// })


function sayHi(name, surname, callback) {
    /*
       ...
     */
callback(name + ' ' + surname)
}

sayHi("Lazizbek", "Mirsobitov", (fullname) => {
    console.log(fullname)
})



Array.map((item) => { // arraydagi har bir elementni itemga uzatib turadi

})