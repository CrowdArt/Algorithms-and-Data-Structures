/**
 * Given a string, return a new string with the 
 * reversed order of characters.
 * Examples:
 *  reverse('apple') === 'elppa'
 *  reverse('hello') === 'olleh'
 *  
 */

function reverse(str) {
     debugger;
     return str.split('').reduce((rev, char) => char + nav, '');
}
reverse('asdf'); //call the debugger function

module.exports = reverse;


//function reverse(str) {
//    let reversed = '';
//
//    for (let character of str) {
//        reversed = character + reversed;
//    }
//
//    return reversed;
//}
//
//module.exports = reverse;

/**
 * let is variable declaration
 * creating temporary variable = character and is redeclared every single time through this loop
 * of iterable object = str 
 * Iterate through each character of string one by one and set each character equal to temporary 
 * variable 'character'.
 */