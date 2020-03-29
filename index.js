 // Creation of Objects
 /* let person = {
    name: 'Pipu',
    age: 27
 };*/


 //console.log(person);
 //console.log(person.name);

 // Creation of an Array
 let selectedColors = ['red','blue'];
 selectedColors[2] = 'green';
 selectedColors[3] = 4;
 //console.log(selectedColors);
 //console.log(selectedColors.length);

 // Functions
 function greet(name,lastName) { //parameters
   // console.log('Hello ' + name + ' ' + lastName);
 }

 greet('Pumba','Farre'); // Arguments
 greet('Pumba','Farre');

 // Calculating a Value

 function square(number) {
    return number * number;
 }
// console.log(square(2));
 
 // Strings primitive
 const message = 'This is my first message';

 // Stribg Object
 const another = new String('Hi');

 // If condition
 //Hour
 // If hour is between 6 am and 12 pm: Good morning!, 12-6 good afternoon, good evening 
 let hour = 10;

/* if(hour > 6 && hour < 12)
    console.log("Good morning");
    else if(hour < 18 && hour > 12)
    console.log("Good afternoon");
    else
        console.log("Good evening");
        */

// Loops For

for(let i = 0;
    i < 5;
    i++) {
       // console.log('Hola Pipu', i);
    }
    
// Arithmetic
let x = 10;
let y = 3;

// increment x++ , dicrement --x -

// Assignments
x = x + 5;
x += 5; // those two lines are equals

// Comparison

console.log(x === 10); // equal
console.log(x !== 10); // not equal

console.log(x);

// Ternary - condition

let points = 110;
let type = points > 100 ? "gold" : "silver";

console.log(type);

// Logical
// Logical AND (&&) - returns true if both operands are true
if(type == 'gold' && x == 20) {
    console.log("Mi Pipu Hermosa");
}
// Logical OR (||)
if(type == 'silver' || x == 20) {
    console.log("Mi Pipu Super Hermosa");
}
// NOT (!) opposite of 

// Falsy (not boolean)
// undifined
// null
// 0
// ' '
// false
// NaN

// Anything that is not Falsy is -> truly
// short-circuiting false || 1 || 2 -> return 1

let userColor = 'red';
let userDefaultColor = 'blue';
let currentColor = userColor || userDefaultColor;

// Bitwaise Operators
// 1 = 00000001
// 2 = 00000010
// 3 = 00000011

console.log(1 | 2); // Bitwise OR
console.log(1 & 2); // Bitwise OR

// Access permissions
// 00000100 Read
// 00000110 Write
// 00000111 Execute -> see permision example

// Operators Precedence - math logics of multiplication and summarize 

// Exercise

let a = 'red';
let b = 'blue';

// a = 'blue';
// b = 'red';
// change order of list above 
let c = a;
b = a;
a = 'blue';

//console.log(a);
//console.log(b);

// switch and case

let role = 'moderator';

switch(role) {
    case 'guest': 
        console.log('Guest User');
        break;
    
    case 'moderator':
        console.log("Moderator User");
        break;
    
    default:
        console.log("Unknown User");
}

//  Loop While

/* let i = 0;
while(i <= 5) {
    if( i % 2 !== 0) console.log(i);
    i++;
} */

// Loop Do While

/*let i = 9;
do { 
    if( i % 2 !== 0) console.log(i);
    i++;
 } while(i <= 5);
*/

 // Infinite Loops - if you take out the i++ showing there is no increase of the firs value of i it will take you to a infinite loop

 // let i = 0;
 
/* while(i < 5) {
     console.log(i);
    // i++;
}*/
// or true in the condition - while (true)

// Loops for-in - iterate properties in object

const person = {
    name: 'Tincho',
    age: 26
};

    for( let key in person)
    console.log(key,person[key]);

const colors = ['red','blue','green'];

    for(let index in colors)
        console.log(index, colors[index]);

// loop For of - elements in an array

for(let color of colors)
console.log(color);

// Break and continue -> can change the way a loop perform

let i = 0;
while (i <= 10) {
    if (i === 5) break;
    console.log(i);
    i++;
}

let numero = max(7, 2);


function max(iu,tu) {
    return (iu > tu) ? iu : tu;
}
console.log(numero);

// Exercise 2

let exercise2 = isLandscape(3,4);

function isLandscape(width, height) {
    return (width > height);
}

console.log(exercise2);

      // Exercise 2 FizzBuzz 
     //   divisible by 3 Fizz
    // divisible by 5 Buzz


    const output = fizzBuzz('numero');
    console.log(output);

    function fizzBuzz(input) {
    if (typeof input !== 'number') return NaN;
    if ((input % 3 === 0) && (input % 5 === 0)) return "FizzBuzz";
    if(input % 3 === 0) return "Fizz";
      if (input % 5 === 0) return "Buzz";   
        else return 'input';
        }
    



