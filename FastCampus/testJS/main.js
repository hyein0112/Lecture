// 콘솔창 출력
console.log('Hyein');

// String
let myName="HYEIN";
let email = 'hyein_0112@naver.com';

let hello = `hello ${myName} !!` 
console.log(hello); // hello HYEIN !!

// Number
let number = 123;
let opacity = 1.57;
console.log(number, opacity); // 123 1.57

// Boolean
let isShow = false;
let checked = true;

console.log(isShow) // false
console.log(checked) // true

// Undefined
let undef;
let obj = { abc: 123} ;

console.log(undef); // undefined
console.log(obj.abc); // 123
console.log(obj.xyz); // undefined

// Null
let empty = null;

console.log(empty); // null

// Object
let user = {
  name:'hyein',
  email: 'hyein_0112@naver.com'
};

console.log(user.name); // hyein
console.log(user.email); // hyein_0112@naver.com

// Array
let fruits = ['apple', 'banana', 'cherry'];

console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // cherry


/*
DOM API

(1) querySelector
*/

// let boxEl = document.querySelector('.box');
// console.log(boxEl);
// boxEl.addEventListener('click', function(){
//   console.log('Click~!');
// });

// boxEl.classList.add('active');
// let isActive = boxEl.classList.contains('active');
// console.log(isActive); //true

// boxEl.classList.remove('active');
// let isActive = boxEl.classList.contains('active');
// console.log(isActive); // false


// let boxEl = document.querySelector('.box');
// console.log(boxEl);
// boxEl.addEventListener('click', function(){
//   console.log('Click~!');
//   boxEl.classList.add('active');
//   console.log(
//     boxEl.classList.contains('active')
//   );
//   boxEl.classList.remove('active');
//   console.log(
//     boxEl.classList.contains('active')
//   );
// });


/*

(2) querySelectorAll
*/
// const boxEls = document.querySelectorAll('.box');
// boxEls.forEach(function (boxEl, index) {
//   boxEl.classList.add(`order-${index +1}`);
//   console.log(index, boxEl);
// });

/*

(3) Getter, Setter
*/
// const boxEl = document.querySelector('.box');

// //setter
// boxEl.textContent = 'HYEIN';

// //getter
// console.log(boxEl.textContent); 



/*
Promise
*/
function increaseAndPrint(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n+1
      if(value === 5) {
        const error = new Error()
        error.name = 'ValueIsFiveError'
        reject(error)
        return;
      }
      console.log(value)
      resolve(value)
    }, 1000)
  })
}

increaseAndPrint(0)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .catch(e => {
    console.error(e)
  })
