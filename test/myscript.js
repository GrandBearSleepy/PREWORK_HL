function sumNumbers(num1, num2) {
    var result = num1 + num2;
    console.log(result);
}

sumNumbers(10, 20);

// While loops

// var num = 0;

// while(num<100){
//     num += 1;
//     console.log(num);
// }

// for (let num = 0; num <= 100; num++){
//     console.log(num);
// }

//Data types

let yourAge = 18; //number
let yourName = 'Bob'; //string
let name = { first: 'Jane', last: 'Doe' }//object
let truth = false; //boolean
let groceries = ['apple', 'banana', 'oranges'] //array
let nothing = null;//value null

//string in Javascript (common methods)

let fruit = 'banana';
let noreFruits = 'banana\napple';   //new line

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2, 4));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split('n'));


// Array

let fruits = ['banana', 'apple', 'orange', 'pinapples'];

fruits = new Array('banana', 'apple', 'watermelon', 'pinapples');

fruits[0] = 'pear';

console.log(fruits[2]);

console.log(fruits);

for (let i = 0; i <= fruits.length; i++) {
    console.log(fruits[i]);
}

//Array common methids

console.log('ti string', fruits.toString());
console.log(fruits.join('**'));

console.log(fruits);
console.log(fruits.pop()); // removes last item
console.log(fruits);
console.log(fruits.push('berries')); //add a item in the end of array

fruits[fruits.length] = 'new fruit'; // same as push mothed
console.log(fruits);

fruits.shift(); // removes the first element from a array
fruits.unshift('kiwi'); // add a element in the first of array

let vegetables = ['carrot', 'tomato', 'broccoli'];
let allGroceries = fruits.concat(vegetables); //combine arrays

console.log(allGroceries);
console.log(allGroceries.slice(0, 3));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers = [15, 54, 25, 333, 25, 4, 1, 2];
console.log(someNumbers.sort());


//By default, the sort() function sorts values as strings.
console.log(someNumbers.sort(function (a, b) { return a - b }));

// let student = {
//     first: 'Ali',
//     last: 'Me',
//     age: 25,
//     height: 180,
//     studentInfo: function () {
//         return this.first + '\n' + this.last + '\n' + this.age;
//     }
// };
// console.log(student.first);
// console.log(student.last);

//student.first = 'NewName';

//student.age++;
//console.log(student.age);
//console.log(student.studentInfo());

//var age = prompt('What is your age');

// if ((age >= 18) && (age <= 35)) {
//     status = 'not my audience!';
// }
// else {
//     status = 'target';
// }
// console.log(status);

//switch statements
let AA = prompt('Input anumber:');
switch (AA) {
    case 7: text = 'weekend';
        break;
    case 6: text = 'weekend';
        break;
    default: text = 'weekday';
}
console.log(text);