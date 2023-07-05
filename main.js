// KATA 1
//  https://www.codewars.com/kata/5ac6932b2f317b96980000ca
function minValue(values){
  //your code here
  let arr = Array.from(new Set(values));
  
  return parseInt(arr.sort().join(''));
}

console.log(minValue([1, 3, 1]))
console.log(minValue([5, 6, 9, 9, 7, 6, 4]))

// KATA 2 
// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

function validatePIN (pin) {
  return /^(\d{4}$|\d{6})$/.test(pin);
}

// console.log(validatePIN(a234))
// console.log(validatePIN(12345))
// console.log(validatePIN('1234'))

// KATA 3
// https://www.codewars.com/kata/5813d19765d81c592200001a/train/javascript
function dontGiveMeFive(start, end) {
  let count = 0;
  for(let i = start; i <= end; i++) {
    if (!/5/.test(i)) {
      count++;
    }
  }
  return count;
}

console.log(dontGiveMeFive(1,9))

// KATA 4
// https://www.codewars.com/kata/583f158ea20cfcbeb400000a/train/javascript
function arithmetic(a, b, operator){
  switch(operator) {
    case 'add' :
    return a + b;
    break;
    case 'subtract' :
    return a - b;
    break;
    case 'multiply' :
    return a * b;
    break;
    case 'divide' :
    return a / b;
    break;
  }
}

console.log(arithmetic(5,2, 'add')) 
console.log(arithmetic(5,2, 'subtract')) 
console.log(arithmetic(5,2, 'multiply')) 
console.log(arithmetic(5,2, 'divide')) 

// KATA 5
// https://www.codewars.com/kata/5b39e3772ae7545f650000fc/train/javascript

function removeDuplicateWords(s) {
  return (Array.from(new Set(s.split(' ')))).join(' ');
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))


// KATA 6 
//  https://www.codewars.com/kata/59706036f6e5d1e22d000016/train/javascript
function wordsToMarks(string){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let count = 0;
  string.split('').forEach((char) => {
    count += alphabet.indexOf(char) + 1;
  });
  return count;
  
}

console.log(wordsToMarks('attitude'))
console.log(wordsToMarks('friends'))
