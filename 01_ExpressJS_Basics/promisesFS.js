import { log } from 'console';
import fs from 'fs/promises'

let a = await fs.readFile('dev.txt');

let b = fs.appendFile('dev.txt', ' Promises Appended successfully!');

console.log(a.toString(),b);
