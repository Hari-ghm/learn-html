console.log("Hello");
// This is single line comment in js. in js, ; is not mandatory at end of each line.

/* this is a multi line comment
if u have set of code of n lines and want to single comment everyline, use crtl + / 
*/

// variable declaration
let book_Name; // let is a keyword to declare variables.space and spl chr(except _ and $) is not allowed in variable.
book_Name = "harry potter"; // variables are case sensitive

let book_authors = "jkr",
  publ_yr = 1996;
console.log(
  "book Name: ",
  book_Name,
  "\n",
  "book authon: ",
  book_authors,
  "\n",
  "yr published: ",
  publ_yr
);

publ_yr = 2000; // dynamic typing is allowed in js
console.log(publ_yr);

const NAME = "john"; //it is coded as hard coded values. to be in caps for convention
// const NAME="kevin"; it will raise error if this is uncommented and run with above line.
console.log(NAME);

//const x=sum(2,3); this is not hard coded since operation has to be done to s,3 and then stored in x. to be in small for convension.

/* camel case for variable- eg: whiteCase
to make variables more meaning full, instead of using _ betwee 2 words, make use of capital letters */

// number datatype
// numbers datatype include integers,floats and spl numeric values.
let pi = 3.14;
let prime = 29;

console.log(pi, prime);
console.log(typeof pi); // prints number.

// special numeric values
let infi = Infinity;
let negInfi = -Infinity;
console.log(infi, negInfi);
console.log(typeof infi, typeof negInfi);

let temp = NaN;
let temp_1;
temp_1 = NaN + 5; // addition operation to Nan.
temp_2 = NaN ** 0;
console.log(temp, ":", typeof temp);
console.log(temp_1, ":", typeof temp_1); // anyoperator done to Nan, the result is also Nan except NaN**0
console.log(temp_2, ":", typeof temp_2); //only for NaN**0, ans is 1.

/* divided by zero condition */

console.log(1 / 0); //Infinity
console.log(0 / 0); // Nan

// bigint

let limit = 9007199254740991; // beyong this limit, int wont work properly

console.log(limit + 1); // correct output
console.log(limit + 2); //wrong output
// both the above lines gives same output.

let Limit = 9007199254740991n; //made into bigint datatype
console.log(Limit + 1n); // correct output
console.log(Limit + 2n); //correct output
/* operations oof bigint can be done on same datatypes(bigint)
 only*/

// string datatype

let intro = "hi this is js";
console.log(typeof intro);

// `` is a backtip. below esp button. it is used to
let para = `this is bat man's home. bruce wayne said "i'm bat man" `; // str is enclosed within  backtip. we can use '' and "" in any order.

// important use of backtip is we can evalaue a expression inside it which is not possible in "" or ''

let s_12 = `sum of 1 and 2 is ${1 + 2}`; //we have to use $ sign
console.log(s_12);

// boolean datatype

let isMale = true;
console.log(typeof isMale); /// prints boolean
console.log(typeof 4 < 5); //printts false

// null vvalue

let nothing = null;
console.log(typeof nothing); //prints object

//undefined value

let DOB;
console.log(typeof DOB); // prints undefined

// TYPE CONVERSION

console.log("12" / "4"); //output is 3. for some operation implicit conversion takes place.
console.log("12" + "3"); //output is 123. here str concontenation takes place

let age = 9;
console.log(typeof age);
age = String(age) + "0"; //use S and not s
console.log(age, typeof age);

age = Number(age) + 5;
console.log(age, typeof age);

/* if a variable is in boolean type and is converted to number, it will display 1.
but if a varible is like 'true' in string and is converted to number, it gives NaN

same for null(returns 0), undefines (returns NaN), false(return 0)
*/

// boolean coversion
let x = 5;
console.log(typeof x);
x = Boolean(x);
console.log(typeof x);
console.log(x); //evaluates false only if x=0

/* the boolean evaluates false only if any integer is 0 or if string is there(eg: x='false'), it should have no letters.
even is space is there,it evaluates true */

//  OPERATORS

// unary
let l = -1;
l = -l;
console.log(l);

//binary + , - , / , * , % , **
let a = 12,
  b = 4;
let sum = a + b;
console.log(sum);

a = "12";
b = "4";
sum = +a + +b; // unary + converts string to integer. like int() in python
console.log(sum);

x = 3;
console.log(--x); // output: 2. pre-decrement
console.log(x--); // output: 3. post-decrement

// comparisons in js

let resInt = +a > +b; //a and b are in strings. so use unary +
let resStr = a > b; //false becoz ascii value of 1<4
console.log(resInt, typeof resInt);
console.log(resStr, typeof resStr);

let st1 = "book";
let st2 = "books";
console.log(st1 > st2); // false

st1 = false;
st2 = 0;
console.log(st1 == st2); // true. js converts false to number and then evaluate

console.log("0" == 0); // true. automatic type conversion takes place. only values be checked
console.log("0" === 0); // false. automatic type conversion dont takes place. values along with datatype will be checked.

//null and undefined

console.log(null == undefined); //true
console.log(null > 0); //false
console.log(null < 0); // false
console.log(null <= 0); // true
/* from the above 3 statement, we can sense that null=0 should be true. but it is not the case.*/
console.log(null == 0); //

/* REASON
when we are evualting null>0 or null>=0, null is converted to number 0. it prints the results accordingly
but with == operator,null or undefined when compared with any number should return false is a rule in js.
*/

console.log(undefined > 0); //false
console.log(undefined < 0); // false
console.log(undefined <= 0); // false
console.log(undefined == 0); //false

/* REASON
when we are evualting null>0 or null>=0, null is converted to NaN. it prints the results accordingly
but with == operator,null or undefined when compared with any number should return false is a rule in js.
*/

// IF-ELSE CONDITIONALS

let num = 5;
if (num > 4) {
  console.log(`${num} is greater than 4.`);
} else if (num == 4) {
  console.log(`${num} is equal than 4.`);
} else {
  console.log(`${num} is lesser than 4.`);
}

//conditional operator

let person;
age = 20;
person = age > 18 ? "adult" : "child";
console.log(person);

age = 15;
person = age > 18 ? "adult" : age > 14 ? "teenager" : "child";
console.log(person);

// null coalescing logical operator(??)
/* returns the value of the default to variable if the variable is null or undefined.
if variable is already declared, it returns the declared value 
*/

let stop;
let bus_stop = stop ?? "chennai";
console.log(bus_stop);

stop = "trichy";
bus_stop = stop ?? "chennai";
console.log(bus_stop);

console.log(null || 0 || undefined); //output is undefined

// LOOPS - mostly same as c program(while,do-while,for)

let nu = 1;
while (nu < 3) {
  console.log("inside loop");
  nu++;
}
console.log("outside loop");

//factorial and sum of N numbers

n = 5;
let fact = 1;
sumN = 0;
i = 1;
for (i = 1; i <= 5; i++) {
  fact *= i;
  sumN += i;
}
console.log(fact);
console.log(sumN);

//SWITCH-same like c

n = 2;
switch (n) {
  case 1:
    console.log("one");
    break;
  case 2:
    console.log("two");
    break;
  case 3:
    console.log("three");
    break;
  default:
    console.log("default");
    break;
}

//FUNCTIONS OR METHODS

let q = 4,
  r = 3;
function addDiff(x1, x2 = 2) {
  console.log(`x1 + x2 = ${x1 + x2}`);
  let diff = `x1 - x2 = ${x1 - x2}`;
  let check = "it is for checked";
  return diff;
}
addDiff(q, r);
diffr = addDiff(q, r);
console.log(diffr);
console.log(check); //error becoz check is local inside function. so correct this put let c=5

let mult = (a, b) => a * b; // arrow functions
console.log(mult(5, 6));

// callback
function operation(op, a, b) {
  return op(a, b);
}

let Add = (a, b) => a + b;
let sub = (a, b) => a - b;
console.log(operation(Add, 8, 6));

// object-similar o dictionary

let ob = {};
console.log(typeof ob);

ob = {
  obName: "nexon",
  brand: "tata",
  driveTrain: "petrol, diesel, ev",
  price: 15,
  colour: "Red",
  onRoadPrice(price) {
    return this.price + 2; //this tell js to take price value from the dictionary itself.
  },
};
console.log(ob); //display whole dictionary
console.log(ob.obName); // nexon
console.log(ob["colour"]);

/* while using variables as key use can give ob.varible.
but while using strings as keys, u should give ob[string]
*/

delete ob["colour"];
console.log(ob); // colour will be deleted

ob["colour"] = "yellow";
console.log(ob); // colour will be added

console.log(ob.onRoadPrice(11)); // if this. is not there in function, it would print 13.

console.log("brand" in ob); //true. variable should be in string.

for (key in ob) {
  console.log(key + "-" + ob[key]);
}

// object reference

const user = { name: "rolex", age: 25 };
user.age = 20; // const doesnt allow total object to get changed but allows keys in that object to be changed


// constructor

let banana={
  type:"fruit",
  colour:"yellow"
};
 
function Banana(){//constructions have convention of having starting letter in caps.
    this.type="fruit";
    this.colour="yellow";
}

let ban=new Banana();
console.log(ban);

// ARRAY

let veges=new Array();// or let veges=[]
veges=['carrot','beetroot']
console.log(veges);
console.log(veges[1]);
console.log(veges[12]);// prints undefined. do not give error.

let col=['carrot',{name:'ajay',age:56},function add(a,b){return a+b},"beetroot"];
console.log(col[2](1,4))

veges.push("cucumber");// add cucumber as last element in the array.
veges.unshift("ladysfinger") // add the the element as 1st element of the array.
console.log(veges);

console.log(veges.pop());//remove from last element
console.log(veges);

console.log(veges.shift());// removes from starting of the array
console.log(veges);

for (vege in veges){//it will give index in variable vege
  console.log(vege);
}

veges[2]="tomato";
console.log(veges.length)// 3



