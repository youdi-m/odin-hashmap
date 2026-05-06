import { HashMap } from "./hashmap.js";

let map = new HashMap;

map.set('hi', 'hey');
map.set('h i', 'yur');
map.set('h', 'yo');
map.set('h i', 'eyy');

console.log(map.values());
console.log(map.keys());
