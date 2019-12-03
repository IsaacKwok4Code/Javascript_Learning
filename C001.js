var myString;
myString = 'String more';
console.log('print string' + myString);

//7 data types
//Boolean
var wrongOrRight = true;
console.log(wrongOrRight);
//null
var n = null;
//undefined
var a;
console.log(a);
//number
var num = 3.6;
//String
var myString2 = 'string';
//Symbol
var sym1 = Symbol('1');
//object
var myCar = new object();
myCar.make = 'Ford';
myCar.model = 'Mustang';

//String part 1
console.log(myString.length);
console.log(myString.charAt(1));
console.log(myString.concat(' other'));
console.log(myString.endsWith('ing'));
console.log(myString.indexOf('i'));
console.log(myString.lastIndexOf('r'));
console.log(myString.match('r'));
console.log(myString.repeat(3));
console.log(myString.replace('tri','o'));
console.log(myString.search('r'));
console.log(myString.slice(2, 5));
console.log(myString.split(' '));
console.log(myString.startsWith('S'));
console.log(myString.substr(2, 5));
console.log(myString.toLowerCase());
console.log(myString.toUpperCase());
console.log(myString.trim());