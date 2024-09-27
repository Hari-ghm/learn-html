console.log("Hello");
// This is single line comment in js. in js, ; is not mandatory at end of eack line.

/* this is a multi line comment
if u have set of code of n lines and want to single comment everyline, use crtl + / 
*/

// variable declaration
let book_Name; // let is a keyword to declare variables.space and spl chr(except _ and $) is not allowed in variable.
book_Name='harry potter'; // variables are case sensitive

let book_authors='jkr',publ_yr=1996;
console.log("book Name: ",book_Name,'\n',"book authon: ",book_authors,'\n',"yr published: ",publ_yr);

publ_yr=2000;// dynamic typing is allowed in js
console.log(publ_yr)

const NAME='john'; //it is coded as hard coded values. to be in caps for convention
// const NAME="kevin"; it will raise error if this is uncommented and run with above line.
console.log(NAME);

//const x=sum(2,3); this is not hard coded since operation has to be done to s,3 and then stored in x. to be in small for convension.

/* camel case for variable- eg: whiteCase
to make variables more meaning full, instead of using _ betwee 2 words, make use of capital letters */

// number datatype
// numbers datatype include integers,floats and spl numeric values.
let pi=3.14;
let prime=29;

console.log(pi,prime);
console.log(typeof pi); // prints number.

// special numeric values
let infi=Infinity;
let negInfi=-Infinity;
console.log(infi,negInfi);
console.log(typeof infi,typeof negInfi)

let temp=NaN;
let temp_1;
temp_1=NaN+5;// addition operation to Nan. 
temp_2=NaN**0;
console.log(temp,":",typeof(temp))
console.log(temp_1,":",typeof temp_1);// anyoperator done to Nan, the result is also Nan except NaN**0
console.log(temp_2, ":", typeof temp_2); //only for NaN**0, ans is 1.

/* divided by zero condition */

console.log(1/0);//Infinity
console.log(0/0);// Nan

// bigint

let limit = 9007199254740991; // beyong this limit, int wont work properly

console.log(limit+1); // correct output
console.log(limit+2);  //wrong output
// both the above lines gives same output.

let Limit = 9007199254740991n;//made into bigint datatype 
console.log(Limit+1n); // correct output
console.log(Limit+2n);  //correct output
/* operations oof bigint can be done on same datatypes(bigint)
 only*/

// string datatype

let intro='hi this is js';
console.log(typeof intro);

// `` is a backtip. below esp button. it is used to 
let para=`this is bat man's home. bruce wayne said "i'm bat man" `  // str is enclosed within  backtip. we can use '' and "" in any order.

// important use of backtip is we can evalaue a expression inside it which is not possible in "" or ''

let s_12 = `sum of 1 and 2 is ${1+2}`; //we have to use $ sign
console.log(s_12)

// boolean datatype

let isMale=true;
console.log(typeof isMale);/// prints boolean
console.log(typeof 4<5);//printts false

// null vvalue

let nothing=null;
console.log(typeof nothing);//prints object

//undefined value

let DOB;
console.log(typeof DOB); // prints undefined



