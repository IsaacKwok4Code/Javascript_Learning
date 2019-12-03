Math.floor(Math.random()*20);
parseInt("007");

var ourArray = [];

for(var i = 0; i<5;i++) {
    ourArray.push(i);
}
var n =0;
while (n<5) {
    n++;
    if (n==3) continue;
    console.log(n);
} 
var i = 0;
do {
    i++;
    console.log(i);
}while(i<5);
let person = {fname:'Yin', lname:'Kwok'};
let text = '';
for (let x in person) {
    text += person[x];
}
console.log (text);