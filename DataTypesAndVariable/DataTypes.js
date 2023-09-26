/* DataTypesAndVariable and Variable:
undefined, null, boolean, string, symbol, number, and object
 */

// var myName = 'Bear'
//
// myName = 8
//
// let ourName = "TT ELD"
//
// const pi = 3.14



//
// var a;
// var b = 2;
// console.log(a)
// a = 7;
//
// b = a;
//
// console.log(a)


// // Initialize these three variables
// var a = 5;
// var b = 2;
// var c = "New a";
//
// // Do not change code below this line
// a = a + 1;
// b = b + 5;
// c = c + " String!";
//
// console.log(a)
// console.log(b)
// console.log(c)

//
// // Declarations
// var StUdLyCapVaR;
// var properCamelClass;
// var TitleCaseOver;
//
// // Assignments
//
// StUdLyCapVaR = 10;
// properCamelClass = 'A String';
// TitleCaseOver = 9000;
//
// console.log(StUdLyCapVaR)
// console.log(properCamelClass)
// console.log(TitleCaseOver)



// Adding Numbers
//
// var sum = 10 + 10;
// console.log(sum)


// Subtracting Numbers
// var difference = 45 - 22;
// console.log(difference)



// Multiplying Numbers

// var production = 9 * 10;
// console.log(production)



// Dividing Number

// var quotient = 66 / 33;
// console.log(quotient)


// Incrementing Numbers
// var myVar = 87;

// Only change code below this line
// myVar = myVar + 1;

// second usul
// myVar++;
// console.log(myVar)



// Decrementing Numbers
// var myVar = 11;

// Only change code below this line
// myVar = myVar - 1;
// Second usul
// myVar--;
//
// console.log(myVar)



// Decimal Numbers
// var ourDecimal = 5.7;

// Only change code below this line
//
// var myDecimal = 0.009



// Multiply Decimals

// var product = 2.0 * 2.5;
// console.log(product)



// Divide Decimal - O'nlik kasrlarni bo'lish

// var quotient = 4.4 / 2.0;
// console.log(quotient)



// Finding a Remainder - Qoldiq joyini topish juft yoki toq

// var remainder;
// remainder = 11 % 3;
// console.log(remainder)



// Compound Assignment with Augmented Addition (+) - Kengaytirilgan qo'shimcha birikma topshirigi
//
// var a = 3;
// var b = 5;
// var c = 12;
//
// a += 12; // a = a + 12
// b += 9;
// c += 7;
// console.log(a, b, c)



// Compound Assignment with Augmented Subtraction (-)
// var a = 3;
// var b = 5;
// var c = 12;
//
// a -= 12; // a = a - 12
// b -= 9;
// c -= 7;
// console.log(a, b, c)




// Compound Assignment with Augmented Multiply (*)

// var a = 3;
// var b = 5;
// var c = 12;
//
// a *= 12; // a = a * 12
// b *= 9;
// c *= 7;
// console.log(a, b, c)



// Compound Assignment with Augmented Division (*)
// var a = 3;
// var b = 5;
// var c = 12;
//
// a /= 12; // a = a / 12
// b /= 9;
// c /= 7;
// console.log(a, b, c)



// Declare String Variables - String o'zgaruvchilarni elon qilish

// var firstName = "Lazizbek";
// var lastName = "Mirsobitov";
//
//
// var myFirtsname = "Beau";
// var myLastname = "Carnes";


// Escaping Literal Quotes in String - Stringdagi so'zma-so'z qo'shtirnoqlardan qochish
//
// var mySTR = "I am a \"double quoted\" string inside \"double quotes \""
//
// console.log(mySTR)


// Quoting Strings with Single Quotes - Bitta tirnoqli qatorlarni keltirish

// var myStr = '<a href="http://www.tteld.com" target="_blank"> Link </a>';


// Escape Sequences in Strings - Satrlardagi qochish ketma-ketligi

/****
 Code output
 \' single quote
 \" double quote
 \\ backslash
 \n newline
 \r carriage return
 \t tab
 \b backspace
 \f form feed
 ****/
//
// var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"
// console.log(myStr)



// Concatenating Strings with Plus Operator - Plus operatori bilan qatorlarni birlashtirish

// var ourStr = "I come first. " + "I come second.";
//
// var myStr = "This is the start. " + "This is the end"
//
// console.log(`${ourStr}\n ${myStr}`)



// Concatenating Strings with Plus Equals Operator - Plus Equals operatori bilan qatorlarni birlashtirish

// var ourStr = "I come first. ";
// ourStr += "I come second";
//
// console.log(ourStr)


// Concatenating Strings with Variables - Satrlarni o'zgaruvchilar bilan birlashtirish

// var ourName = "TTELD";
// var ourStr = "Hello, our name is " + ourName + ", How are you?";
//
// console.log(ourStr)



// Appending Variables to Strings - O'zgaruvchilarni satrlarga qo'shish

// var anAdjective = "awesome!";
// var ourStr = "freeCodeCamp is ";
// ourStr += anAdjective;
//
// console.log(ourStr)



// Find Length of String - String uzunligini toping

// var firsNameLength = 0;
// var firstname = "Apple";
//
// firsNameLength = firstname.length
//
// console.log(firsNameLength)



// Bracket Notation to Find First Character in String - Stringdagi birinchi belgini topish uchun qavs belgisi
//
// var firsNameLength = "";
// var firstname = "Apple";
//
// firsNameLength = firstname[0];
//
// console.log(firsNameLength)



// String Immutability - String o'zgarmasligi

// var myStr = "Jello World";
//
// myStr[0] = "H"; // Not Fix
//
// myStr = "Hello World" // fixed
//
// console.log(myStr)



// Bracket Notation to find nth Character in String - Stringdagi n-belgini topish uchun qavs belgisi

// var firstname = "Apple";
// var secondLetterOfFirstName = firstname[1];
//
// var lastname = "iMac";
//
// var thirdLetterOfLastName = lastname[2];
//
// console.log(thirdLetterOfLastName)



// Bracket Notation to find Last Character in String - Stringdagi oxirgi belgini topish uchun qavs belgisi

// var firstname = "Apple";
// var lastLetterOfFirstName = firstname[firstname.length - 1];
// console.log(lastLetterOfFirstName)
//
// var lastname = "iMac";
//
// var lastLetterOfLastName = lastname[lastname.length - 1];
//
// console.log(lastLetterOfLastName)



// Bracket Notation to find nth to Last Character in String - Stringdagi n-sonli belgini topish uchun qavs belgisi
//
// var firstname = "Apple";
// var lastLetterOfFirstName = firstname[firstname.length - 3];
// console.log(lastLetterOfFirstName)
//
// var lastname = "iMac";
//
// var lastLetterOfLastName = lastname[lastname.length - 3];
//
// console.log(lastLetterOfLastName)



// Word Blank
//
// function wordBlank(myNoun, myAdjective, myVerb, myAdverb) {
//     var result = "";
//     result += "The " + myAdjective + " " + myNoun + " "+ myVerb + " the store " + myAdverb
//     return result;
// }
//
// console.log(wordBlank("dog", "big", "ran", "quickly"))