// Object


// Build JavaScript Objects

var Dog = {
    "name": "Maks",
    "legs": 4,
    "tails": 1,
    "friends": ["Many"]
}
console.log(Dog)


// Accessing Object Properties with Dot Notation - Nuqta belgisi bilan obyekt xususiyatlariga kirishish

var testObj = {
    "hat": "ballcap",
    "shirt": "jeans",
    "shoes": "sneakers",
};

var hatValue = testObj.hat;
var ShoesValue = testObj.shoes;

console.log(hatValue, ShoesValue)


// Accessing Object Properties with Bracket Notation - Qavs belgisi bilan obyekt xususiyatlariga kirish

var testObj1 = {
    "hat": "ballcap",
    "shirt": "jeans",
    "shoes": "sneakers",
};

var hatValue = testObj1["hat"];
var ShoesValue = testObj1["shoes"];

console.log(hatValue, ShoesValue)



// Accessing Object Properties with Variables - O'zgaruvchi bilan obyekt xususiyatlariga kirish

var testObj =  {
    10: "Messi",
    7: "Ronaldo",
    9: "Inesta"
};

var playerNumber = 10;
var player = testObj[playerNumber];

console.log(player)



// Updating Object Properties - Obyekt Xususiyatlarini yangilash


var Dog = {
    "name": "Maks",
    "legs": 4,
    "tails": 1,
    "friends": ["Many"]
}

Dog.name = "Jerry"

console.log(Dog)



// Add New Properties to an Object - Obyektga yangi xususiyatlar qo'shish

var Dog = {
    "name": "Maks",
    "legs": 4,
    "tails": 1,
    "friends": ["Many"]
}
// 1 usul
Dog.bark = "woof"
// 2 usul
Dog["barks"] = "woof!"
console.log(Dog)




// Delete Properties from an object - Obyekt xususiyatlarini o'chirish


var Dog = {
    "name": "Maks",
    "legs": 4,
    "tails": 1,
    "friends": ["Many"],
    "bark": "woof!"
}
delete Dog.bark;

console.log(Dog)




// Using Objects for Lookups - Qidiruv uchun obyektlardan foydalanish

function phoneticLookup(val) {
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "frank"
    };
    result = lookup[val];

    return result;
}

console.log(phoneticLookup("charlie"))




// Testing Objects for properties - Xususiyatlar uchun sinovdan o'tkazish

var Obj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp){
    if (Obj.hasOwnProperty(checkProp)){
        return Obj[checkProp];
    } else {
        return "Not found";
    }
}
console.log(checkObj("gift"))




// Manipulating Complex Objects - Murakkab obyektlar boshqarish

var Music = [
    {
        "artist": "Jah khalib",
        "title": "Dochenka",
        "release_year": 2021,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    }
]

console.log(Music)




// Accessing Nested Object - Ornatilgan Obyektlar kirish

var myStorage = {
    "car": {
        "inside": {
            "gloves box": "maps",
            "passenger seat": "crumbs",
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside['gloves box'];

console.log(gloveBoxContents)



// Accessing Nested Arrays - ichkaridagi massivlarga kirish

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[0].list[0]
console.log(secondTree)



// Record Collection - Yozuvlar kollektsiyasi

var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1989",
        "artist": "Prince",
        "tracks": [
            "1989",
            "Little Red Corvette"
        ]
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));
console.log(collectionCopy)

function updateRecords(id, prop, value){
    if(value === ""){
        delete collection[id][prop];
    } else if(prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }
    return collection
}

console.log(updateRecords(2468, "artist", "1989"))





// Write Concise Object Literal Declarations Using Simple Fields - Oddiy maydonlardan foydalanilgan holda qisqacha obyekt deklaratsiya

const createPerson = (name, age, gender) => ({ name, age, gender
    // return {
    //     name: name,
    //     age: age,
    //     gender: gender
    // };
});

console.log(createPerson("Diyor Botayev", 22, "Male"))