// Loops


// Iterate with While Loops - While loops bn takrorlash

var myArray = [];

var i = 0;
while(i < 5){
    myArray.push(i);
    i++;
}
console.log(myArray)




// Iterate with for loops - For sikl bn ishlash

var myArray = [];

for (var i = 0; i < 5; i++){
    myArray.push(i)
}

console.log(myArray)




// Iterate Odd Number with a for loop - For sikl bn toq raqamlarni takrorlash

var myArray = [];
for(var i = 0; i < 10; i += 2){
    myArray.push(i);
}
console.log(myArray)



// Count Backwards with a For loop - For sikl bn orqaga sanash

var myArray = [];
for(var i = 9; i > 0; i -= 2){
    myArray.push(i);
}
console.log(myArray)



// Iterate Through an Array with a for loop - for sikl bn massive orqali takrorlash

var myarray = [9, 10, 11, 12];
var mytotal = 0;

for(var i = 0; i < myarray.length; i++){
    mytotal += myarray[i];
}

console.log(mytotal)



// Nested For loop

function multitypeAll(arr){
    var product = 1;

    for(var i = 0; i < arr.length; i++){
        for (var j=0; j < arr[i].length; j++){
            product *= arr[i][j];
        }
    }

    return product;
}

var product = multitypeAll([[1, 2], [3, 4], [5, 6, 7]]);

console.log(product)




// Iterate with Do ... While Loops

var myArray = [];
var i = 10;


do {
    myArray.push(i);
    i++;
} while (i < 5)

console.log(i, myArray)





// Profile Loopup - Profilne qidirish

var contacts = [
    {
        "firstname": "Siroch",
        "lastname": "Mirsobitov",
        "number": "+998946681323",
        "likes": ["pizza", "Agent", "drives"]
    },
    {
        "firstname": "Diyor",
        "lastname": "Botayev",
        "number": "+998998610121",
        "likes": ["hamburger", "Dizayn", "Pubg"]
    },
    {
        "firstname": "Hojiakbar",
        "lastname": "Mahamadjonov",
        "number": "+998971979899",
        "likes": ["Sushi", "Menejer", "Paints"]
    }
];

function lookupProfile(name, prop){
    for(var i = 0; i < contacts.length; i++){
        if(contacts[i].firstname === name) {
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact";
}

var data = lookupProfile("Diyor", "number")



console.log(data)