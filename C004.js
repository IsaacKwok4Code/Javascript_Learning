//String reverse
var myString = 'hello world!';

function reverseStringOne(s) {
    var splitedString = s.split('');
    var reverseString = splitedString.reverse();
    var result = reverseString.join('');
    return result;
}

function reverseStringTwo(s) {
    var copyString = '';
    for (var i = s.length - 1; i >= 0; i--) {
        copyString+= s[i];
    }
    return copyString;
}

function reverseStringThree(s) {
    return (s === '') ? '' : reverseStringThree(s.substr(1)) + s.charAt(0);
  }