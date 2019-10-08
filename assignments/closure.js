// import innerFunc from 'innerFunc';
// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

const Bills = "Let's go Buffalo! Let's go.";
function whatCrowdsShout(){
  console.log(Bills);
}
whatCrowdsShout();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.

const counter = () => {
let count = 0;
return function() {
  return ++count;
}
};

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

const counterMaker = (limit) => {
  let count = 0;
  const counter = function() {
    count++;
    if(count>limit){
      count=1}
    return count;
    } 

  return counter;
  };

  const myCounter = counterMaker(4);

console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
// const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
// };

const counterFactory = () => {
  let counter = 0;
  console.log(counter);
  let increment = () => counter += 1;
  let decrement = () => counter -= 1;
  let resObj = {increment, decrement};
  return resObj;
};

let foo = counterFactory();

console.log(foo.decrement());
console.log(foo.increment());