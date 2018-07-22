// Exercise 7.1

function runBot(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) return turn;
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

function compareRobots(robot1, memory1, robot2, memory2) {
  let avg1 = [];
  let avg2 = [];
  for (let i = 0; i < 100; i++) {
    let village = VillageState.random();
    avg1.push(runBot(village, robot1, memory1));
    avg2.push(runBot(village, robot2, memory2));
  }
  console.log("Average route-length for routeRobot is " + 
              Math.floor(avg1.reduce((a, b) => a + b, 0) / 100));
  console.log("Average route-length for goalOrientedRobot is " + 
              Math.floor(avg2.reduce((a, b) => a + b, 0) / 100));
}

compareRobots(routeRobot, [], goalOrientedRobot, []);


//Exercise 7.2

function yourRobot({place, parcels}, route) {
  if (route.length == 0) {
    let result = [];
    for (let i = 0; i < parcels.length; i++) {
      let parcel = parcels[i];
      if (parcel.place != place) {
        result.push(route = findRoute(roadGraph, place, parcel.place));
      } else {
        result.push(route = findRoute(roadGraph, place, parcel.address));
      }
    }
    route = result.reduce((a, b) => a.length < b.length ? a : b);
  }
  
  return {direction: route[0], memory: route.slice(1)};
}

//runRobotAnimation(VillageState.random(), yourRobot, []);

function runBot(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) return turn;
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

function compareRobots(robot1, memory1, robot2, memory2) {
  let avg1 = [];
  let avg2 = [];
  for (let i = 0; i < 100; i++) {
    let village = VillageState.random();
    avg1.push(runBot(village, robot1, memory1));
    avg2.push(runBot(village, robot2, memory2));
  }
  console.log("Average route-length for yourRobot is " + 
              Math.floor(avg1.reduce((a, b) => a + b, 0) / 100));
  console.log("Average route-length for goalOrientedRobot is " + 
              Math.floor(avg2.reduce((a, b) => a + b, 0) / 100));
}

compareRobots(yourRobot, [], goalOrientedRobot, []);


// 7.3

class PGroup {
  constructor(v) {
    this.array = v;
  }

  add(v) {
    if (!this.has(v)) return new PGroup(this.array.concat([v]));
    return this;
  }
  
  delete(v) {
    return new PGroup(this.array.filter(x => x != v));
  }
  
  has(v) {
    return this.array.includes(v);
  }
}
// Why do you need only one PGroup.empty value, rather
// than having a function that creates a new, empty map every time?
PGroup.empty = new PGroup([]);

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
