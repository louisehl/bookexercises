// chapter 10: Modules

//10.1

/* If you were to write that project as a modular program, 
 * what modules would you create? Which module would depend 
 * on which other module, and what would their interfaces look like?
 * Which pieces are likely to be available prewritten on NPM? Would 
 * you prefer to use an NPM package or write them yourself?
 */

/* I would build the graph-building and -creation as a module or as,
 * two seperate modules. Then I would build the robot's different
 * path-using as either individual modules or one big module. The 
 * various routes it has to find is implemented in this such as 
 * findRoute or mailRoute.
 * The modules would be dependent on each ether, as the route to find is 
 * dependent on the graph and vice versa. 
 * The modules most likely will be on NPM. Espacially the path-finding
 * algo.
 * I would prefer to write them myself, however save time by using pre-
 * made modules from NPM.
 */
 

// 10.2

const {buildGraph} = require('./graph');

const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

exports.roadGraph = buildGraph(roads.map(r => r.split('-')));