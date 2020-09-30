// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     return str.split('').reverse().join('') 
// }

// function reverse(str) {
//     let reversedStr = ''
//     for (let char of str){
//         reversedStr = char + reversedStr
//         debugger
//     }

//     return reversedStr
// }

function reverse(str) {
    let array = str.split('')
    return array.reduce((reversed, char) => char + reversed, '')
    // debugger
}

// reverse('Hello!')

module.exports = reverse;
