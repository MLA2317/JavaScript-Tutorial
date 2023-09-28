// Strings


// Create Strings using Template Literals - Shablon satrlar yordamida satrlar yaratish

// const person = {
//     name: "Laziz Mirsobitov",
//     age: 21
// };
//
// const greeting = `Hello, my name is ${person.name}!
// I am ${person.age} years old.`;
//
// console.log(greeting)
//



const result = {
    success: ["max-length", "no-amd", "prefer-arrow-function"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
    const resultDisplayArray = [];
    for(let i = 0; i < arr.length; i++){
        console.log(arr)
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    return resultDisplayArray;
}

const resultDisplayArray = makeList(result.success)
console.log(resultDisplayArray)

