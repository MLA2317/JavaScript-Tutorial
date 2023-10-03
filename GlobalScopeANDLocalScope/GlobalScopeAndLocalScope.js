// Global Scope and Local Scope


// Local scope

// {
//     let name = "Lazizbek"
//     //console.log(name)
// }
// // Global scope
// console.log(name)



let name = "Siroch"

function getName(){
    let name = "Lazizbek"
    console.log(name)
}
console.log(name) // birinchi local chiqadi

getName() // keyin global functiya ishladi

