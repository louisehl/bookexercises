// 4.1
function range(start, end, start < end ? step = 1 : step = -1){
  if (step == 0) return null;

  let array = [];
  for (let i = start; start < end ? i <= end : i >= end; i += step) {
    array.push(i);
  }
  return array;
}

function sum(array){
  let sum = 0;
  for (let item of array) sum += item;
  return sum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55


// 4.2

function reverseArray(array){
  let newArray = [];
  for (let item of array) newArray.unshift(item);
  return newArray;
}

function reverseArrayInPlace(array){
  for (let i = 0; i < array.length / 2; i++) {
    let var1 = array[i];
    let var2 = array[array.length - i - 1];
    array[array.length-i-1] = var1;
    array[i] = var2;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5, 6];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

// 4.3

function arrayToList(array){
  let list = {value: array[0], rest: null};
  for (let i = 1; i < array.length; i++) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list){
  let array = [];
  if(list.rest != null) array = listToArray(list.rest);
  array.push(list.value);
  return array;
}

function prepend(element, list){
  return {value: element, rest: list};
}

function nth(list, number){
  if (!list) return undefined;
  if (number == 0) return list.value;
  else return nth(list.rest, number - 1);
}

console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));

// 4.4

function deepEqual(one, two){
  if (one === two) return true;
  
  if (typeof one == "object" && typeof two == "object"){
    if (one == null && two == null) return true;
    if (one == null || two == null) return false;
    
    if (Object.keys(one).length == Object.keys(two).length) {
      for (let item of Object.keys(one)){
        if (Object.keys(two).includes(item)) {
          if (!deepEqual(one[item], two[item])) return false;
        }
      }
      return true;
    }
  } 
  return false;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true








