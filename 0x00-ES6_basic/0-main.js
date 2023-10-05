import { taskFirst, taskNext } from './0-constants.js';

const firstTask = taskFirst();
const nextTask = taskNext();

console.log(firstTask); // Output: 'I prefer const when I can.'
console.log(nextTask); // Output: 'But sometimes let is okay'

