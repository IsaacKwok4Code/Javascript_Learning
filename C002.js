function square(number) {
    return number * number;
}
square(4);

var isExit = true;
var isNow = false;
if(isExit) {

}else if (isNow) {
    
} else {
    
}
// ||,&&,!,
// > < >= <= , ==, ===
//condition ? result1 : result2

switch (new Date().getDay()) {
    case 0:
    day ='sunday';
    break;
    case 1,2:
    day = 'workDay';
    break;
    default:
    day = 'holiday';
}

var sandwich = ["food","computer","mouse"];
sandwich.push("cup");
sandwich.pop();
//concat, join, reverse, shift, sort
var copyArray = JSON.parse(JSON.stringify(sandwich));