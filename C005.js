var myString = 'hello world';
var myString2 = 'ABCDCBA';

function isPalindrome(s) {
    return s.replace(/[\W_]/g, '').toLowerCase() ===
           s.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
  }
  
  console.log(isPalindrome("racecar"));
  

  
  function isPalindrome(s) {
    var regex = /[^A-Za-z0-9]/g;
    s = s.toLowerCase().replace(regex, '');
    var len = s.length;
    for (var i = 0; i < len/2; i++) {
      if (s[i] !== s[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }
  