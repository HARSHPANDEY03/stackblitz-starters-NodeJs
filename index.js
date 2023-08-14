// console.log('var');

// let p = 5;
// p = 4;
// console.log(p);

// {
//   let a = 10;
//   console.log(a);
// }
// console.log(a);
// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(i);

// const x = 5;
// console.log(x);
// var sum=function(a,b){
//   return a+b
// }

// var sum=(a,b)=>{
//   return a+b
// }

// const myName = 'Harsh';
// console.log('My name is ',myName);
// console.log(`My name is ${myName}`)

// const arr1 = [1,2,3,4];
// const arr2 = [...arr1,5,6,7,8];
// console.log(arr2);

// const sum = (a, ...n){
//   console.log(a, ...n);

// }
// sum(2,3,4,5);

// const [a, b, c] = [1, 2, 3];
// console.log(a, b, c);

// const arr = [1, 2, 3];
// for (const a of arr) {
//   console.log(a);
// }

const arr = [1, 2, 3, 4];
// map
// const newArr = arr.map((a) => {
//   return a * a;
// });
const newArr = arr.map((a) => a * a);
console.log(newArr);
// filter
// const newArr1 = arr.filter((a) => {
//   return a % 2 === 0;
// });
const newArr1 = arr.filter((a) => a % 2 === 0);
console.log(newArr1);
// reduce
// const newarr2 = arr.reduce((a, c) => {
//   return a + c;
// }, 0);
const newarr2 = arr.reduce((a, c) => a + c, 0);
console.log(newarr2);
