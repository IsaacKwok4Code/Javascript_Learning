console.log('hello!');
//comment
/* mult comment
end */
var number = 5;
//Data type:
var name = 'yin';
var isHere = true;
var num = 5;

console.log(name);
name = 'Isaac';
console.log(name);

let ourName = 'learn js';
const pi = 3.14;

var ourCar = {
    'brand' : 'Toyota',
    'year' : '2018',
    'model' : 'windrunner',
    'door' : 4,
    'engine' : 'V8',
    'owner' : ['Yin','Isaac']
};

console.log(ourCar.engine);

if(ourCar.hasOwnProperty('year')){
    ourCar.year = 2019;
}
console.log(ourCar.year);

if('year' in ourCar){
    ourCar.year = 2018;
}
console.log(ourCar.year);

//use => as function

var createObject = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender
    };
};

console.log(createObject('Yin', 99, 'Male'));

let word1 = 'Yin';
let word2 = 'K';
let keyword = `${word1} ${word2}`;
console.log(keyword);

//Destructuring
const personalInfo = {
    firstName:'Yin',
    lastName: 'k',
    city:'HK',
    state:'TX',
    zipCode:28269
};

const {city, state} = personalInfo;
console.log(`${city} ${state}`);

let numNew = [620, 989 ,731];
let total = 0;

//const char
for (const listNum of numNew) {
    total += listNum;
}
console.log(total);

//callback function example
/*
function greeting(name) {
    alert('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
  }
  
  processUserInput(greeting);
  */

  let x = function() {
      console.log('called inside a function');
  }
  let y = function(callback){
      console.log('this is first call?');
      callback();
  }

  y(x);
//dumb way
/*
let calc = function (n1, n2 , calType) {
    if (calType === 'add') {
        return n1+n2;
    }else if (calType === 'mult') {
        return n1*n2;
    }
};
console.log(calc(2,3,'add'));
*/

let add = function (n1,n2) {
    return n1+n2; 
}

let mult = function (n1,n2) {
    return n1*n2; 
}

let calc = function (n1,n2,callback) {
    return callback(n1,n2);
}
console.log(calc(2,3,mult));

//promise
let promiseToCleanTheRoom = new Promise(function(resolve,reject){
    //change this
    let isClean = false;

    if(isClean){
        resolve('Clean');
    }else{
        reject('not Clean');
    }
});

promiseToCleanTheRoom.then(function(fromResolve){
    console.log('room is ' + fromResolve);
}).catch(function(fromReject){
    console.log('room is ' + fromReject);
});

//promise with 2+ functions 
let cleanRoom = function () {
    return new Promise(function(resolve,reject){
        resolve ('clean room');
    });
};

let removeGarbage = function (g) {
    return new Promise(function(resolve,reject){
        resolve (g + 'remove garbage');
    });
};

let haveIcecream = function(i) {
    return new Promise(function(resolve,reject){
        resolve(i + 'have icecream');
    });
};
/*
cleanRoom()
    .then(function(result){
        console.log('removing garbage');
        return removeGarbage(result);
    })
        .then(function(result){
            console.log('having icecream');
            return haveIcecream(result);
        }).then(function(result){
            console.log('finished' + result);
        });
        */
// Promise.race
Promise.all([cleanRoom(),removeGarbage(),haveIcecream()]).then(function(){
    console.log('All finished');
});

//async await
console.log('p1:buy powerball 1');
console.log('p2:buy powerball 2');

const promiseWithWinningTicket = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket');
    },3000)
});

promiseWithWinningTicket.then((t) => {
    console.log(`p3:buy powerball 3 + ${t}`);
});

console.log('p4:buy powerball 4');

