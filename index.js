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
    


// Exercise 3 Speedlimit
// 5 km -> 1 point
// math.floor
// more than 12 points "License suspended"

checkSpeed(200);

function checkSpeed(speed) {
    const speedLimit = 70;
    const pointsPerKm = 5;
    const licenseSuspended = 12;

    if(speed <= speedLimit) console.log("Ok") ;
    
    else { 
        const points = Math.floor((speed - speedLimit) / pointsPerKm);
        if (points >= 12) 
            console.log("License suspended");
            else console.log('Points', points);
    }
}

// Exercise 5 - For loop - even odd - ?

showNumbers (10);

function showNumbers(limit) {

    for(let i = 0;
        i <= limit;
        i ++) {
            {let parInpar = ((i % 2) !== 0) ? "Odd" : "Even";

            
           console.log(i, parInpar);
        }
    }

}

// Exercise 6 Count truthy


// function countTruthy

const arrayExercise6 = [0,1,2,3,null,''];

console.log(countTruthy(arrayExercise6));

function countTruthy (arrayExercise6) {
    let countExercise6 = 0;
    for (let value of arrayExercise6)
        if (value)
            countExercise6 ++;
            return countExercise6;
}

// Exercise 7 showProperties 

const movie ={
    title : 'El Ilusionista',
    releaseYear : 2013,
    rating : 4.5,
    director: 'Stephan'
};

showProperties(movie);

function showProperties (obj) {
    for (let index in obj)
    if (typeof obj[index] === 'string' ) console.log(index,movie[index]) ;    
}

// Exercise 8 Multiples of 3 and 5

console.log (sumExercise8 (10));

function sumExercise8 (limit) {
    let sumExercise8 = 0;
    
    for(let i = 0;
        i <= limit;
        i ++) {
           if ( i % 3 === 0 || i % 5 === 0) 
           sumExercise8 =+ i ;

           return sumExercise8;
        }
    }

// Exercise 9 Grade
// 0 - 59: F
// 60 - 69: D
// 70 - 79: C
// 80 - 89: B
// 90 - 100: A


const marks = [100,70,80];

console.log(calculateGrade(marks));

function calculateGrade(marks) { 
    const average = calculateAverage(marks);
    if ( average < 60) return 'F';
    if ( average < 70) return 'D';
    if ( average < 80) return 'C';
    if ( average < 90) return 'B';
    return 'A';
}

// calcular average

function calculateAverage (array) {
    let sum = 0;
    for (let value of array)
        sum += value;
    return sum / array.length;
}

// Exercise 10 Stars

showStars(3);

function showStars(rows) {
    for (let row = 1; row <= rows; row++) { 
        let pattern = '';
        for(let i = 0; i < row; i++)
            pattern += '*';
        console.log(pattern);
    }
}

// Exercise 11 Primes

showPrimes(20);

function showPrimes (limit) {
    for(let number = 2; number <= limit; number++)
        if (isPrime (number)) console.log(number);
}

function isPrime (number) {
    for (let factor = 2; factor < number; factor++) 
        if (number % factor === 0) 
            return false;
        return true;
}

// Objects Section

/* const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function(){
        console.log('draw')
    }
}; */

// circle.draw(); // method <> a function

// Factory Function -> produce objects -> camel notation

/* function createCircle () {
    const circle = {
        radius: 1,
        location: {
            x: 1,
            y: 1
        },
        isVisible: true,
        draw: function(){
            console.log('draw')
        }
    };  
}*/

function createCircle (radius) {
    return {
        radius,
        draw () {
            console.log('draw');
        }
    };  
}

const circle = createCircle(15);

console.log(circle);

// Constructor Functions -> Pascal Notation: 

function Circle(radius) {
    this.radius = radius;
    this.location = {
        x: 10,
        y: 15
    };
    this.draw = function () {
        console.log('draw');
    }
}

const another = new Circle(8);


// Dynamic Nature of Objects

delete circle.location;
circle.color = "green";

console.log(circle);

// Constructor Property

/*const holaa = true;

console.log(holaa);
*/

// Primitives are copied by their values, and objects by references (distintos escenarios)

//  Enumerating Properties of an Object

for (let key in another)
    console.log(key, another[key]);

for (let key of Object.keys(another))
    console.log(key);

for (let entry of Object.entries(another))
    console.log(entry); // muestro como array

if ('radius' in another) console.log('yes');

// Cloning an Object

const anotherPrim = {};
    for (let key in another)
    anotherPrim[key] = another[key];

    // other simpler way to do the same action -> anotherPrime2

    const anotherPrim2 = Object.assign({
        color : "yellow"
    }, another);

    // super simple way to do the same

    const anotherPrim3 = { ...another };


anotherPrim3.secondName = 'tutu';


console.log(anotherPrim3);

// garbage collector

// String Primitive

const message1 = "Hi";

// String Object

const anotherMessage = new String('Hi');

const vaElTercero = 'Armani\n' +
'El taco no';

// Template Literals

// template ``

const vaElTercero3 = `Hace la personal y se va, se va`;

let greetingMessage = 
`Hi ${vaElTercero}.

Thank you for joining my mailing list,

Regards,
Martin `;

// Date object

const now = new Date ();
const date1 = new Date ('May 11 2019 09:00');
const date2 = new Date(2019,4,11,9);

// now.toISOString() standard use with web application talking to a backend

// Excersice 1 Objects

const Home = {
    street: 'Soldado de la Independencia',
    city: 'CABA',
    zipCode: '1426',
};

function showAddress(Home) {
    for (let key in Home) 
    console.log(key,Home[key]);
}

showAddress(Home);

// Exercise 3

function Address (street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
} 



let address1 = new Address("Bobzin", "Buenos Aires","2651");
let address2 = new Address("Bobzin", "Buenos Aires","2651");

console.log(areEqual(address1,address2)); // si tienen mismo valores (propiedades)
console.log(areSame(address1,address2)); // no es mismo objeto son distintos

function areEqual ( address1, address2) {
    return address1.street === address2.street;
}

function areSame ( address1, address2) {
    return address1 === address2;  
}

// Arrays Section

const numbers = [3,1,4];

// add new elements
// end
numbers.push(5,6);


// beginning

numbers.unshift(1,2);

//  middle

numbers.splice(2,0, 'a', 'b');

console.log(numbers);

console.log(numbers.indexOf(1));
console.log(numbers.lastIndexOf(1));

console.log(numbers.indexOf(1) !== -1); // true if find number
console.log(numbers.includes(1)); // true if find number

console.log(numbers.indexOf(1,2)); // donde está el segundo 1

// find element in object

const courses = [
    { id:1, name: 'a'},
    { id:2, name: 'b'},
];

const course = courses.find(function(course) {
    return course.name === 'b';
});

console.log(course);

// same of find with Arrow function

const course2 = courses.find(course => course.name === "a");
console.log(course2);

// remove elements from array

// end
const last = numbers.pop();
console.log(numbers);
console.log(last);
// beginning
const first = numbers.shift();
console.log(numbers);
console.log(first);

// middle
const middle = numbers.splice(3,2);
console.log(numbers);

// Emptying array
const anotherNumbersArray = numbers;

numbers.length = 0; // the best option
console.log(numbers);
console.log(anotherNumbersArray); 

// solution 2 splice method
numbers.splice(0,numbers.length);

// solution 3 not so used - while

/*while (nombers.length > 0)
    numbers.pop();*/


// Combine & Slice Arrays

const firstNumber = [1,2,3];
const secondNumbers = [4,5,6];

const combined = firstNumber.concat(secondNumbers);
console.log(combined);

const slice = combined.slice(2);
const slice2 = combined.slice(2,4);

console.log(slice);

// Spread operator

const combined2 = [...firstNumber, "Quintero", ...secondNumbers];
console.log(combined2);

// Iterating an Array

const numbeers = [1,2,3,4,5,6];

for (let number of numbeers)
    console.log(number);

/*numbeers.forEach(function(number){
    console.log(number);
});*/

// o
numbeers.forEach((number,index) => console.log(number,index));

// Join

const numberJoin = [1,2,3];
const joined = numberJoin.join(',');
console.log(joined);
console.log(numberJoin);

const messageJoin = 'This is my first message';
const partsOfMessageJoin = messageJoin.split(' ');
console.log(partsOfMessageJoin);

const combinedJoinParts = partsOfMessageJoin.join('-');
console.log(combinedJoinParts); 
// sirve para sacar espacios de arrays

// Sorting arrays

const numberSorted = [2,1,3];
numberSorted.sort();
console.log(numberSorted);

numberSorted.reverse();
console.log(numberSorted);

const courseSorting = [
    {id:1 , name:'Node.js'},
    {id:2 , name:'javaScript'},
];

courseSorting.sort(function (a,b) {
    // a < b => -1
    // a > b => 1
    // a === b => 0
const nameA = a.name.toUpperCase();
const nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});
console.log(courseSorting);

// Testing the elements of an array

const numbersTest = [1,2,3,"a","b",6]

// numbersTest.splice(3,2);

const allPositives = numbersTest.every(function(value) {
    return value >= 0;    
});

console.log(allPositives);
console.log(numbersTest);

const somePositives = numbersTest.some(function(value) {
    return value >= 0;    
});

console.log(somePositives);

// Filtering

const filtered = numbersTest.filter(value => value >= 0);
console.log(filtered);

// Mapping an array

const items = filtered.map(n => '<li>' + n + '</li>'); // in array

const itemsObjects = filtered.map(n => 
    ({value: n})); // in object

const html = '<ul>' + items.join('') + '</ul>';

console.log(itemsObjects);

// Another format of filtering chaining the functions

const itemsCombined = 
    numbersTest
    .filter(n => n >= 0)
    .map(n => ({ value: n}))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

console.log(itemsCombined);

const itemsCombined2 = 
    numbersTest
    .filter(n => n >= 0)
    .map(n => ({ value: n}))
    .filter(obj => obj.value > 1 );

console.log(itemsCombined2);

// Reducing an Array -> calculating the total of the array

const numbersReducing = [1, -1, 2, 3];

let sum = 0;
    for (let n of numbersReducing)
        sum += n;
    
console.log(sum);

const sum2 = numbersReducing.reduce((accumulator, currentValue) => accumulator + currentValue
);

console.log(sum2);

// Function Section 
// 2 ways to declare a function

// Function Declarations 
// Hoisting go to the top when calling a declaration

walk();

function walk() {
    console.log('walk');
};



// Function Expressions


let run = function() {
    console.log('run');
};

let move = run;
run();
move();

//  Difference between declaration and experssion 

function sum4() {
    let total2 = 0;
    for ( let value3 of arguments)
        total2 += value3;
        return total2;
}

    
console.log(sum4(7,7));

console.log(sum4(2,3,4,5,6,7,8));

// Rest operator (must be the last parameter in the function expression) -> same as for loop but easier
function sum5(discount, ...prices) {
    const total = prices.reduce((a,b) => a + b);
    return total * (1 - discount);
}

console.log(sum5(0.1, 20, 30));

// Default Parameters


function interest(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}


console.log(interest(1000, 3, 5));

// getters and setters

const personTincho = {
    firstName: 'Martin',
    lastName: 'Farre',
    get fullName() {
        return `${personTincho.firstName} 
        ${personTincho.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts [1];
    }
};

personTincho.fullName = 'Mijal Licata';

// getters => access properties
// setters => change (mutate) them

console.log(personTincho);
// console.log(personTincho.fullName());

// Try and Catch

const personTry = {
    firstName: 'Martin',
    lastName: 'Farre',
    set fullName(value) {
        if (typeof value !== 'string')
            throw new Error('Value is not a string.');

        const parts = value.split(' ');
        if(parts.length !== 2)
            throw new Error('Enter a first and last name');
        this.firstName = parts[0];
        this.lastName = parts [1];
    }
};
/*
try {
    personTry.fullName = "";
}
catch (e) {
    alert(e);
}

console.log(personTry);
*/

// Scoping 

function start () {
const message = 'hi';
}

function stop() {
    const message = 'bye';
}


// let vs var

function start2() {
    for(var i=0; i<5; i++)
        console.log(i);
    console.log(i);
}

start2();

// var -> function-scoped
// ES6 (ES2015): let, const => block-scoped

// var son globales y afectan de forma general y pueden ser sobre-escritos

// This

const video = {
    title: 'a',
    tags: ['a','b','c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
         }, this);
    }
};

video.showTags();

// Changing this

function playVideo () {
    console.log(this);
    

}