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