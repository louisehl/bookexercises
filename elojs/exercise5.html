
//5.1

let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
console.log(arrays.reduce((a, b) => a.concat(b)));
// → [1, 2, 3, 4, 5, 6]


// 5.2
function loop(value, test, update, body) {
  while (test(value)) {
    body(value);
    value = update(value);
  }
}


loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1


// 5.3

function every(array, test) {
  for(let i = 0; i < array.length; i++){
    if(!test(array[i])) return false;
  }
  return true;
}

function every(array, test) {
  return !array.some((x) => !test(x));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true


//5.4

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(x => x.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function dominantDirection(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : 'none';
  }).filter(({name}) => name != 'none');
  
  let total = scripts.reduce((n, {count}) => n + count, 0);
  if (total == 0) return 'ltr';
  
  return scripts.reduce((a, b) => a.count > b.count ? a : b).name;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("مساء الخير Hey,"));
// → rtl